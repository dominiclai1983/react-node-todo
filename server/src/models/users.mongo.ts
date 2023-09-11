//const mongoose = require('mongoose');
import mongoose from "mongoose";
import { IApplicationUser } from "../types/userType";

const userSchema = new mongoose.Schema<IApplicationUser>({
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

export default mongoose.model<IApplicationUser>("User", userSchema);
