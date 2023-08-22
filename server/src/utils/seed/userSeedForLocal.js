const path = require("path");
const bcrypt = require("bcryptjs");
const { postNewUser } = require("../../models/users.model");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const seedUser = [
  {
    email: "someemail@gmail.com",
    username: "test1",
    password: "123456",
  },
];

const userSeedForLocal = async () => {
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

module.exports = userSeedForLocal;
