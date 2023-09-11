import {
  findExistUser,
  postNewUser,
  postLoginUser,
} from "../../models/users.model";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export async function httpPostNewUser(req: Request, res: Response) {
  try {
    const { email, password, username } = req.body;

    if (!(email && password && username)) {
      return res.status(400).json({
        error: "Missing required field",
      });
    }

    const existUser = await findExistUser(email);

    if (existUser) {
      return res.status(404).json({
        error: "User Already Exist. Please Login",
      });
    }

    const stringPassword = String(password);

    const encryptedPassword = await bcrypt.hash(stringPassword, 10);

    const finalUser = {
      username: username,
      email: email,
      password: encryptedPassword,
    };

    const newUser = await postNewUser(finalUser);

    return res.status(201).send({
      username: newUser.username,
      email: newUser.email,
      token: newUser.token,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function httpPostLoginUser(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res.status(400).json({ error: "All input is required" });
  }

  const stringPassword = String(password);

  const user = await postLoginUser(username, stringPassword);

  if (user) {
    return res.json({ status: "ok", data: user.token });
  } else {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
}

export function httpGetLogoutUser(req: Request, res: Response) {
  res.clearCookie("nToken");
  return res.redirect("/");
}
