import { User } from '@/packages/user';

export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

export interface FindOneUserParams extends Pick<User, 'email' | 'password'> {}
