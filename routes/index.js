const express = require("express");
const router = express.Router();

router.post("/why", (req, res) => {
  res.json({
    why: "bshs"
  });
});

router.post("/who", (req, res) => {
  res.json({
    why: "now"
  });
});

module.exports = router;
