const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "client", "dist")));
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT || 3001);
