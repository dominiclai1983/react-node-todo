const http = require("http");
const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { connectTestDB } = require("./services/setuptestdb");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  //await connectTestDB();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  console.log(`this is our check ${process.env.NODE_ENV}`);
});

startServer();
