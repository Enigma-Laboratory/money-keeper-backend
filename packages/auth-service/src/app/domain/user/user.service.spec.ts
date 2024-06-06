import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { ConfigService } from '../../../config';
import { FindUserDto, UserSignupDto } from './dto/user-request.dto';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>;

  const mockUserRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockUserRepository,
        },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should throw conflict exception if user with email already exists ', async () => {
      const userInput: UserSignupDto = {
        email: 'test@example.com',
        password: 'password',
        firstName: 'First',
        lastName: 'Last',
      };

      mockUserRepository.findOne.mockResolvedValue(userInput);
      await expect(service.create(userInput)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should create a new user', async () => {
      const userInput: UserSignupDto = {
        email: 'test@example.com',
        password: 'password',
        firstName: 'First',
        lastName: 'Last',
      };

      mockUserRepository.findOne.mockResolvedValue(null);
      mockUserRepository.create.mockReturnValue({});
      mockUserRepository.save.mockResolvedValue(userInput);
      jest.spyOn<any, any>(bcrypt, 'hash').mockResolvedValue('hashedPassword');

      const result = await service.create(userInput);

      expect(result).toEqual(userInput);
      expect(mockUserRepository.create).toHaveBeenCalledTimes(2);
      expect(mockUserRepository.save).toHaveBeenCalledTimes(1);
    });
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      const users = [{ email: 'test@example.com' }];
      mockUserRepository.find.mockResolvedValue(users);

      const result = await service.getAllUsers();

      expect(result).toEqual(users);
      expect(mockUserRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {
      const email = 'test@example.com';
      const user = { email };

      mockUserRepository.findOne.mockResolvedValue(user);

      const result = await service.findOneByEmail(email);

      expect(result).toEqual(user);
      expect(mockUserRepository.findOne).toHaveBeenCalledTimes(3);
    });
  });

  describe('updateRefreshTokenByEmail', () => {
    it('should update refresh token to null', async () => {
      const email = 'test@example.com';
      const user = { email, refreshToken: 'oldToken' };

      mockUserRepository.findOne.mockResolvedValue(user);
      mockUserRepository.save.mockResolvedValue({
        ...user,
        refreshToken: null,
      });

      const result = await service.updateRefreshTokenByEmail(email, null);

      expect(result.refreshToken).toBeNull();
      expect(mockUserRepository.save).toHaveBeenCalledTimes(2);
    });
  });

  describe('findUserByProperty', () => {
    it('should find users by properties', async () => {
      const params: FindUserDto = {
        email: 'test@example.com',
        firstName: 'First',
        lastName: 'Last',
        name: 'Test User',
      };
      const users = [{ email: 'test@example.com' }];

      mockUserRepository.find.mockResolvedValue(users);

      const result = await service.findUserByProperty(params);

      expect(result).toEqual(users);
      expect(mockUserRepository.find).toHaveBeenCalledTimes(2);
    });
  });

  describe('hashPassword', () => {
    it('should return hashed password', async () => {
      const password = 'password';
      const hashedPassword = 'hashedPassword';

      jest.spyOn(bcrypt, 'hash' as any).mockResolvedValue(hashedPassword);

      const result = await service.hashPassword(password);

      expect(result).toBe(hashedPassword);
      expect(bcrypt.hash).toHaveBeenCalledWith(password, 10);
    });
  });
});
