import { FindAllResponse, GetOneParams } from '../common';

/** Represents a user entity with various properties. */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  gsm: string;
  createdAt: string;
  isActive: boolean;
  avatar: Avatar;
}

export interface Avatar {
  name: string;
  percent: number;
  size: number;
  status: string;
  type: string;
  uid: string;
  url: string;
}

/** Represents the response structure for finding multiple users. */
export interface FindAllUserResponse extends FindAllResponse<Omit<User, 'password'>> {}

/** Represents the parameters for login. */
export interface LoginParams extends Pick<User, 'email' | 'password'> {}

/** Represents the parameters for finding a single user. */
export interface FindOneUserParams extends GetOneParams {}

/** Represents the parameters for creating a new user. */
export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

/** Represents the parameters for updating a user. */
export interface UpdateOneUserParams extends User {}

/** Represents the parameters for deleting a user. */
export interface DeleteOneUserParams extends GetOneParams<User> {}

// Reusing the GetOneParams interface for finding a single user by their ID.
// This interface is not repeated here since it's already defined in a previous response.
