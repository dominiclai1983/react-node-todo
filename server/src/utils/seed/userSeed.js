const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcryptjs");
const { postNewUser } = require("./src/models/users.model");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

const seedUser = [
  {
    email: "someemail@gmail.com",
    username: "test1",
    password: "123456",
  },
];

const userSeed = async () => {
  try {
    for (const user of seedUser) {
      const stringPassword = String(user.password);
      const encryptedPassword = await bcrypt.hash(stringPassword, 10);

      const finalUser = {
        username: user.username,
        email: user.email,
        password: encryptedPassword,
      };

      await postNewUser(finalUser);

      console.log(`User "${user.username}" has been seeded successfully.`);
    }
  } catch (e) {
    console.error("Error seeding users:", e);
  }
};

userSeed().then(() => {
  mongoose.connection.close();
  console.log(`seeding completed! DOM!`);
});
