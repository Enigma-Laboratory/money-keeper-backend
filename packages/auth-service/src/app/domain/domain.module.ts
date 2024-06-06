import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config';
import { DBModule } from 'src/database';
import { UserEntity } from './user/entity/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DBModule.forRoot({
      entities: [UserEntity],
    }),
    UserModule,
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
