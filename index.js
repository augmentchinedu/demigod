const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.json({
    name: true,
    status: "good"
  });
});

app.listen(process.env.PORT || 3000);
