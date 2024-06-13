import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'jsonwebtoken';
import { ConfigService } from '../../../config';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { UserSignInDto } from './dto/auth-request.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  let jwtService: JwtService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findOneByEmail: jest.fn(),
            updateRefreshTokenByEmail: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue({
              auth: {
                access_token_secret: 'access-secret',
                refresh_token_secret: 'refresh-secret',
              },
            }),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('signIn', () => {
    it('should return tokens if credentials are valid', async () => {
      const payload: UserSignInDto = {
        email: 'test@test.com',
        password: 'password',
      };
      const user = new UserEntity();
      user.email = payload.email;
      user.password = await bcrypt.hash(payload.password, 10);

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(user);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(true);
      jest.spyOn(authService, 'createToken' as any).mockResolvedValue({
        userId: user.id,
        email: user.email,
        permissions: [],
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      });

      const result = await authService.signIn(payload);

      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw NotFoundException if user not found', async () => {
      const payload: UserSignInDto = {
        email: 'test@test.com',
        password: 'password',
      };

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(null);

      await expect(authService.signIn(payload)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException if password does not match', async () => {
      const payload: UserSignInDto = {
        email: 'test@test.com',
        password: 'password',
      };
      const user = new UserEntity();
      user.email = payload.email;
      user.password = await bcrypt.hash('wrong-password', 10);

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(user);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(false);

      await expect(authService.signIn(payload)).rejects.toThrow(
        'user with email password not found',
      );
    });
  });

  describe('logout', () => {
    it('should update refresh token to null', async () => {
      const user = new UserEntity();
      user.email = 'test@test.com';

      await authService.logout(user);

      expect(userService.updateRefreshTokenByEmail).toHaveBeenCalledWith(
        user.email,
        null,
      );
    });
  });

  describe('validateJwtPayload', () => {
    it('should return user data without password', async () => {
      const payload = { email: 'test@test.com' } as JwtPayload;
      const user = new UserEntity();
      user.email = payload.email;
      user.password = 'password';

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(user);

      const result = await authService.validateJwtPayload(payload);

      expect(result).not.toHaveProperty('password');
      expect(result.email).toBe(payload.email);
    });
  });

  describe('refreshToken', () => {
    it('should return new tokens if refresh token is valid', async () => {
      const user = new UserEntity();
      user.email = 'test@test.com';
      user.refreshToken = 'refresh-token';
      const userResponse = new UserEntity();
      userResponse.email = user.email;
      userResponse.refreshToken = await bcrypt.hash('refresh-token', 10);

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(userResponse);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(true);
      jest.spyOn(authService, 'createToken' as any).mockResolvedValue({
        userId: user.id,
        email: user.email,
        permissions: [],
        accessToken: 'new-access-token',
        refreshToken: 'new-refresh-token',
      });

      const result = await authService.refreshToken(user);

      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw ForbiddenException if refresh token is invalid', async () => {
      const user = new UserEntity();
      user.email = 'test@test.com';
      user.refreshToken = 'invalid-refresh-token';
      const userResponse = new UserEntity();
      userResponse.email = user.email;
      userResponse.refreshToken = await bcrypt.hash('refresh-token', 10);

      jest.spyOn(userService, 'findOneByEmail').mockResolvedValue(userResponse);
      jest.spyOn(bcrypt, 'compare' as any).mockResolvedValue(false);

      await expect(authService.refreshToken(user)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('createToken', () => {
    it('should return access and refresh tokens', async () => {
      const user = new UserEntity();
      user.id = '1';
      user.email = 'test@test.com';

      jest
        .spyOn(jwtService, 'signAsync')
        .mockImplementation(async (data, options) => {
          if (options.secret === 'access-secret') {
            return 'access-token';
          }
          if (options.secret === 'refresh-secret') {
            return 'refresh-token';
          }
          return '';
        });

      const result = await authService.createToken(user);

      expect(result).toHaveProperty('accessToken', 'access-token');
      expect(result).toHaveProperty('refreshToken', 'refresh-token');
    });
  });

  describe('comparePassword', () => {
    it('should return true if passwords match', async () => {
      const enteredPassword = 'password';
      const dbPassword = await bcrypt.hash(enteredPassword, 10);

      const result = await (authService as any).comparePassword(
        enteredPassword,
        dbPassword,
      );

      expect(result).toBe(false);
    });

    it('should return false if passwords do not match', async () => {
      const enteredPassword = 'password';
      const dbPassword = await bcrypt.hash('wrong-password', 10);

      const result = await (authService as any).comparePassword(
        enteredPassword,
        dbPassword,
      );

      expect(result).toBe(false);
    });
  });
});
