const express = require("express");
const router = express.Router();
const stock = require("../controllers/stock.controller.js");

router.post("/submit", stock.submit);
router.post("/stocksubmit", stock.submitstockbalance);
router.post("/getstock", stock.getstock);
module.exports = router;
