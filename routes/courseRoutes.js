const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const authMiddleware = require("../middleware/authMiddlware");

// PROTECTED COURSE ROUTES
router.post("/", authMiddleware, courseController.addCourse);
router.get("/", authMiddleware, courseController.getCourses);

module.exports = router;
