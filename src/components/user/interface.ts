import { FindAllResponse, getOneParams } from '@/interface';

export interface User {
  id: string;
  name: string;
  email: string;
  address?: string;
  numberPhone?: number;
  createdAt?: Date;
  updatedAt?: Date;
  password: string;
}

// export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   unit: "vnd" | "usd" | "jpy" | "eur";
// }

export interface OrderDetail {
  id: string;
  orderingPerson: string;
  createDate: Date;
}

export interface Order {
  id: string;
  quantity: number;
}

export interface FindAllUserResponse extends FindAllResponse<Omit<User, 'password'>> {}

export interface FindOneUserParams extends getOneParams {}
