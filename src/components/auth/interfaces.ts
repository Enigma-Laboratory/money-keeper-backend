import { User } from '@/enigma-laboratory/sdk/user';

export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

export interface FindOneUserParams extends Pick<User, 'email' | 'password'> {}
