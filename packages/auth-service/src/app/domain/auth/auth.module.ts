import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from 'src/config';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenJwtStrategy } from './strategies/access-jwt-strategy';
import { RefreshTokenJwtStrategy } from './strategies/refresh-jwt-strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({}),
    forwardRef(() => UserModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, RefreshTokenJwtStrategy, AccessTokenJwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
