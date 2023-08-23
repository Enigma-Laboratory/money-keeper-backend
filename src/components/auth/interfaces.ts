import { User } from '@/packages/user/user.interfaces';

export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

export interface FindOneUserParams extends Pick<User, 'email' | 'password'> {}
