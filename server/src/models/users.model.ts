import User from "./users.mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { NewUser, Filter } from "../types/userType";

const DEFAULT_USER_ID = 999;

async function findUser(filter: Filter) {
  return await User.findOne(filter);
}

export async function findExistUser(email: string) {
  return await findUser({
    email: email,
  });
}

async function getLatestUserID() {
  const latestID = await User.findOne().sort("-userID");

  if (!latestID) {
    return DEFAULT_USER_ID;
  }

  return latestID.userID;
}

export async function postNewUser(user: NewUser) {
  const newUserID = (await getLatestUserID()) + 1;
  const actualID = { userID: newUserID };
  const finalUser = Object.assign(actualID, user);

  const newUser = await User.create(finalUser);

  const token = jwt.sign(
    {
      username: newUser.username,
      userID: newUser.userID,
    },
    process.env.TOKEN_KEY as string,
    { expiresIn: "2h" }
  );

  newUser.token = token;

  return newUser;
}

export async function postLoginUser(username: string, password: string) {
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        username: user.username,
        userID: user.userID,
      },
      process.env.TOKEN_KEY as string, //this one is jwt_secret
      { expiresIn: "2h" }
    );
    user.token = token;
  }
  return user;
}
