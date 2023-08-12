import { User } from '../customer/interface';

export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

export interface FindOneUserParams extends Pick<User, 'email' | 'password'> {}
