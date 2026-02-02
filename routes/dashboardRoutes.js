const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");
const authMiddleware = require("../middleware/authMiddlware");

router.get("/", authMiddleware, dashboardController.getDashboardStats);

module.exports = router;
