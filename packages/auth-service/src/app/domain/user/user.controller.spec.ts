import { Test, TestingModule } from '@nestjs/testing';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getAllUsers: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    })
      .overrideGuard(AccessTokenGuard)
      .useValue({ canActivate: jest.fn(() => true) }) // Mock the guard
      .compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('allUsers', () => {
    it('should return an array of users', async () => {
      const result = [{ id: 1, name: 'John Doe' }];
      jest.spyOn(userService, 'getAllUsers' as any).mockResolvedValue(result);

      expect(await userController.getAllUsers()).toBe(result);
    });
  });
});
