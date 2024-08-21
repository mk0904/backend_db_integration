const express = require("express");
const dotenv = require("dotenv");
const getUsers = require("./controller");

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/api/users/get", getUsers);
module.exports = app;