import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from 'src/config';
import { Repository } from 'typeorm';
import { fieldsToUpdateDto } from './dto/user-request.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private configService: ConfigService,
  ) {}

  async getAllUsers() {
    return this.userRepo.find({});
  }

  async update(email: string, fields: fieldsToUpdateDto) {
    if (fields.email) {
      const duplicateUser = await this.findOneByEmail(fields.email);
      if (duplicateUser) {
        fields.email = undefined;
      }
    }

    const fieldToUpdate: any = {};
  }

  async findOneByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepo.findOne({
      where: {
        email,
      },
    });
  }
}
