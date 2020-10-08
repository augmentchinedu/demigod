const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.get("/old", (req, res) => {
  res.json({
    name: true,
    status: "hjbjfj"
  });
});
app.get("/new", (req, res) => {
  res.json({
    name: true,
    status: "vgehr h"
  });
});
app.get("/age", (req, res) => {
  res.json({
    name: true,
    status: "ge ebnr"
  });
});

app.listen(process.env.PORT || 3000);
