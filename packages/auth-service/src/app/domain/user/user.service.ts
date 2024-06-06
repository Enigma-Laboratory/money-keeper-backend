import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from 'src/config';
import { Like, Repository } from 'typeorm';
import { FindUserDto, UserSignupDto } from './dto/user-request.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private configService: ConfigService,
  ) {}

  async create(userInput: UserSignupDto): Promise<UserEntity> {
    const userEntity = this.userRepository.create();
    const { email } = userInput;

    const existingUser = await this.findOneByEmail(email);

    if (existingUser) {
      throw new ConflictException('user with email already exists');
    }

    const pass = await this.hashPassword(userInput.password);

    const saveEntity = {
      ...userEntity,
      ...userInput,
      password: pass,
      firstName: userInput.firstName,
      lastName: userInput.lastName,
      email: userInput.email,
    };

    try {
      const user = await this.userRepository.save(saveEntity);
      return user;
    } catch (error) {
      throw new ConflictException('user already exist with same email ');
    }
  }

  async getAllUsers() {
    return this.userRepository.find({});
  }
  async findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
  async updateRefreshTokenByEmail(email: string, refToken: string) {
    if (!refToken) {
      const user = await this.findOneByEmail(email);
      const saveEntity = { ...user, refreshToken: null };
      return await this.userRepository.save(saveEntity);
    }
  }

  async findUserByProperty(params: FindUserDto) {
    const { email, firstName, lastName, name } = params;
    const users = await this.userRepository.find({
      where: [
        { name: Like(`%${name}%`) },
        { email: Like(`%${email}%`) },
        { firstName: Like(`%${firstName}%`) },
        { lastName: Like(`%${lastName}%`) },
      ],
    });
    return users;
  }

  async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }
}
