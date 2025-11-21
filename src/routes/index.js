const express = require("express");
const noteRoutes = require("./noteRoutes");

const router = express.Router();
router.use("/note", noteRoutes);

module.exports = router;