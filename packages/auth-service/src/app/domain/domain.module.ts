import { Module } from '@nestjs/common';
import { DBModule } from 'src/database';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DBModule.forRoot({
      entities: [],
    }),
    UserModule,
  ],
})
export class DomainModule {}
