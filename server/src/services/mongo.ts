//const mongoose = require("mongoose");
import mongoose from "mongoose";
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const MONGO_URL: string | undefined = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err: string) => {
  console.error(err);
});

async function mongoConnect() {
  if (MONGO_URL) {
    await mongoose.connect(MONGO_URL);
    console.log(`this is our checker`);
  } else {
    console.error("MONGO_URL is not defined in environment variables.");
  }
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect };
