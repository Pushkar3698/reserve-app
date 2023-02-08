const express = require("express");
const { getBusDetails } = require("../controller/busDetails");
const router = express.Router();

router.post("/getDetails", getBusDetails);

module.exports = router;
