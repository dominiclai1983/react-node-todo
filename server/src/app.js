const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./routes/api");

require("dotenv").config();

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

module.exports = app;
