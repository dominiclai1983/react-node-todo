import * as http from "http";
import app from "./app";
import { mongoConnect } from "./services/mongo";
import * as dotenv from "dotenv";

dotenv.config();

const PORT: string = process.env.PORT || "8000";

const server: http.Server = http.createServer(app);

async function startServer(): Promise<void> {
  await mongoConnect();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  console.log(`this is our check ${process.env.NODE_ENV}`);
});

startServer();
