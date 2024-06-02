import { FindAllParams, FindAllResponse, GetOneParams } from '../common';

/** Represents a user entity with various properties. */
export interface User {
  _id: string /** The unique identifier for the user. */;
  name: string /** The name of the user. */;
  email: string /** The email address of the user. */;
  address?: string /** The address of the user (optional). */;
  numberPhone?: number /** The phone number of the user (optional). */;
  createdAt?: Date /** The timestamp when the user was created (optional). */;
  updatedAt?: Date /** The timestamp when the user was last updated (optional). */;
  image?: string /** The avatar image URL of the user (optional). */;
  password: string /** The password of the user. */;
}

/** Represents the response structure for finding multiple users. */
export interface FindAllUserResponse extends FindAllResponse<Omit<User, 'password'>> {}

/** Represents the parameters for login. */
export interface LoginParams extends Pick<User, 'email' | 'password'> {}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

/** Represents the parameters for finding a single user. */
export interface FindOneUserParams {
  email?: string;
}
export interface FindOneUserResponse extends User {}

/** Represents the parameters for creating a new user. */
export interface CreateUserParams extends Pick<User, 'name' | 'email' | 'password'> {}

export interface CreateUserResponse extends User {}

/** Represents the parameters for updating a user. */
export interface UpdateOneUserParams extends Partial<User> {
  currentPassword?: string;
}

export interface UpdateOneUserResponse extends User {}

/** Represents the parameters for deleting a user. */
export interface DeleteOneUserParams extends GetOneParams<User> {}

export interface DeleteOneUSerResponse {
  result: number;
}

export interface ForgotPasswordParams {
  email: string;
}

export interface FindAllDailyUserParams extends Required<Pick<FindAllParams, 'start' | 'end'>> {
  /**
   * Optional group ID for filtering.
   */
  groupId?: string;
}

/**
 * Represents the response structure for finding all daily orders.
 */
export interface FindAllDailyUserResponse {
  /**
   * An array containing daily order data.
   */
  data: { date: Date; value: number }[];

  /**
   * Total number of orders across all days.
   */
  total: number;

  /**
   * Trend of orders over time.
   */
  trend: number;
}
