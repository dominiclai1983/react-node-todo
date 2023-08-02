const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const User = require(path.join(__dirname, ".", "src", "models", "users.mongo"));

require("dotenv").config();

const MONGO_URL = "";

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
  {
    email: "anotheremail@gmail.com",
    username: "test2",
    password: "123456",
  },
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(seedUser);
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log(`seeding completed! DOM!`);
});
