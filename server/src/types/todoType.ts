import * as mongoose from "mongoose";

export interface IApplicationTodo extends mongoose.Document {
  item: string;
  completed: boolean;
  deleted: boolean;
  user_id: number;
}
