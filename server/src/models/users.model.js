const User = require("./users.mongo");
//this one is the database
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DEFAULT_USER_ID = 999;

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

async function findUser(filter) {
  return await User.findOne(filter);
}

async function findExistUser(email) {
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

async function postNewUser(user) {
  const newUserID = (await getLatestUserID()) + 1;
  const actualID = { userID: newUserID };
  const finalUser = Object.assign(actualID, user);

  const newUser = await User.create(finalUser);

  const token = jwt.sign(
    {
      username: newUser.username,
      userID: newUser.userID,
    },
    process.env.TOKEN_KEY,
    { expiresIn: "2h" }
  );

  newUser.token = token;

  return newUser;
}

async function postLoginUser(username, password) {
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        username: user.username,
        userID: user.userID,
      },
      process.env.TOKEN_KEY, //this one is jwt_secret
      { expiresIn: "2h" }
    );
    user.token = token;
  }
  return user;
}

module.exports = {
  findExistUser,
  postNewUser,
  postLoginUser,
};
