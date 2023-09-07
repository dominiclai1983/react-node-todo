//const mongoose = require('mongoose');
import * as mongoose from "mongoose";

interface User {
  username: string | null;
  email: string;
  password: string;
  userID: number;
  token: string;
}

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  userID: {
    type: Number,
  },
  token: {
    type: String,
  },
});

//module.exports = mongoose.model("User", userSchema);

export default mongoose.model<User>("User", userSchema);
