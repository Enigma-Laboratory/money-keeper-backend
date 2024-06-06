import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from 'src/config';
import { AuthService } from '../auth.service';

@Injectable()
export class RefreshTokenJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          let data = request?.cookies['refresh_token'];
          if (!data) {
            return null;
          }
          return data;
        },
      ]),
      secretOrKey: configService.get().auth.refresh_token_secret,
      passReqToCallback: true,
    });
  }
  async validate(req: any, payload: any) {
    const refreshToken = req?.cookies['refreshToken'];

    const user = await this.authService.validateJwtPayload(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { ...user, refreshToken };
  }
}
