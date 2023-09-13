//const mongoose = require('mongoose');
import mongoose from "mongoose";
import { IApplicationTodo } from "../types/todoType";

const todosSchema = new mongoose.Schema<IApplicationTodo>(
  {
    item: {
      $type: String,
      required: true,
    },
    completed: {
      $type: Boolean,
      default: false,
    },
    deleted: {
      $type: Boolean,
      default: false,
    },
    user_id: {
      $type: Number,
      required: true,
    },
  },
  { typeKey: "$type" }
);

export default mongoose.model<IApplicationTodo>("Todo", todosSchema);
