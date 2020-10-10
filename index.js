const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.get("/a", (req, res) => {
  res.json({
    name: "boss"
  });
});
app.get("/a/b", (req, res) => {
  res.json({
    name: "boss"
  });
});
app.get("/des", (req, res) => {
  res.json({
    name: "boss"
  });
});

app.use(express.static(path.join(__dirname, "client", "dist")));
app.use("*", (req, res) => {
  res.json({
    status: "Not Found"
  });
});

app.listen(process.env.PORT || 3000);
