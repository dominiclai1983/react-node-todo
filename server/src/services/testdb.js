const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer = null;

const connectTestDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, { dbName: "testingDB" });
  console.log(`MongoDB successfully connected to ${uri}`);
};

const dropDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
};

const dropCollections = async () => {
  if (mongoServer) {
    const collections = mongoose.connection.db.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  }
};

module.exports = { connectTestDB, dropDB, dropCollections };