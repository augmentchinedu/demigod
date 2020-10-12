const config = require("./config");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "client", "dist")));

app.listen(config.app.port, () => {
  console.log(`Server Started @ Port ${config.app.port}`);
});
