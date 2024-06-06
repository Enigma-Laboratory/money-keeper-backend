import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';
import { ConfigService } from 'src/config';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { UserSignInDto } from './dto/auth-request.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly usersService: UserService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async signIn(payload: UserSignInDto) {
    const { email, password } = payload;
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException();
    }

    let isMatch: boolean = false;

    isMatch = await this.comparePassword(password, user.password);

    if (isMatch) {
      const response = await this.createToken(user);
      await this.updateRefreshToken(user.email, response.refreshToken);
      return response;
    } else {
      throw new NotFoundException('user with email password not found');
    }
  }

  public async logout(user: UserEntity) {
    await this.usersService.updateRefreshTokenByEmail(user.email, null);
  }

  public async validateJwtPayload(payload: JwtPayload) {
    const data = await this.usersService.findOneByEmail(payload.email);
    delete data.password;
    return data;
  }

  public refreshToken = async (user: UserEntity) => {
    const userResponse = await this.usersService.findOneByEmail(user.email);
    if (!userResponse) {
      throw new ForbiddenException();
    }

    // comparing refresh_token and userResponse.refresh_token if matching
    const isMatchFound = await bcrypt.compare(
      user.refreshToken,
      userResponse.refreshToken,
    );
    if (!isMatchFound) {
      throw new ForbiddenException();
    }

    const tokens = await this.createToken(user);
    await this.updateRefreshToken(user.email, tokens.refreshToken);
    return tokens;
  };

  private async updateRefreshToken(email: string, token: string) {
    await this.usersService.updateRefreshTokenByEmail(email, token);
  }

  public async createToken(user: UserEntity) {
    const data: JwtPayload = {
      userId: user.id,
      email: user.email,
      permissions: user.permissions,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(data, {
        secret: this.configService.get().auth.access_token_secret,
        expiresIn: '1d',
      }),
      this.jwtService.signAsync(data, {
        secret: this.configService.get().auth.refresh_token_secret,
        expiresIn: '30d',
      }),
    ]);

    return {
      ...data,
      accessToken,
      refreshToken,
    };
  }

  private async comparePassword(
    enteredPassword: string,
    dbPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, dbPassword);
  }
}
