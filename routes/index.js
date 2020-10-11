const express = require("express");
const router = express.Router();

router.get('/why',(req, res)=>{
    res.json({
        why:'bshs'
    })
})

module.exports = router;
