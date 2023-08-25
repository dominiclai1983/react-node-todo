import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

import api from "./routes/api";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(morgan("combined"));
//middleware for server logging
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
//it parse the incoming request to JSON
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "..", "client", "build", "index.html")
    );
  });
}

app.use("/api", api);

export default app;
