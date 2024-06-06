import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config';
import { DBModule } from 'src/database';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DBModule.forRoot({
      entities: [UserEntity],
    }),
    AuthModule,
    UserModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
