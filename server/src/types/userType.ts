import * as mongoose from "mongoose";

export interface IApplicationUser extends mongoose.Document {
  username: string | null;
  email: string;
  password: string;
  userID: number;
  token: string;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface Filter {
  email: string;
}
