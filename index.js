const config = require("./config");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use("/api", router);

app.use(express.static(path.join(__dirname, "client", "dist")));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(config.app.port, () => {
  console.log(`Server Started @ Port ${config.app.port}`);
});
