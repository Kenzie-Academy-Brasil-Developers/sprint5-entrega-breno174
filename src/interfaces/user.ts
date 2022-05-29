import { User } from "../entities/User";

export interface IUser {
  id: string;
  name: string;
  age: number;
  create_at: string;
  update_at: string;
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  age: number;
  password: string;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
