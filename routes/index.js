const express = require("express");
const router = express.Router();

router.get("/why", (req, res) => {
  res.json({
    why: "bshs"
  });
});

router.get("/who", (req, res) => {
  res.json({
    why: "now"
  });
});
router.get("*", (req, res) => {
  res.json({
    status: "Not Found"
  });
});

module.exports = router;
