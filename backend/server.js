const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World ! We are learning backend");
});

app.listen(PORT, () => {
  console.log(`App is running on the port ${PORT}`);
});
