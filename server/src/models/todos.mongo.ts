//const mongoose = require('mongoose');
import mongoose from "mongoose";

interface Todo extends mongoose.Document {
  item: string;
  completed: boolean;
  deleted: boolean;
  user_id: number;
}

const todosSchema = new mongoose.Schema<Todo>(
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

//module.exports = mongoose.model("Todo", todosSchema);
export default mongoose.model<Todo>("Todo", todosSchema);
