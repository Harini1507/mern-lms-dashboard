const express = require("express");
const router = express.Router();
const lessonController = require("../controller/lessonController");
const authMiddleware = require("../middleware/authMiddlware");

router.post("/", authMiddleware, lessonController.addLesson);
router.get("/", authMiddleware, lessonController.getLessons);
router.put("/:id", authMiddleware, lessonController.updateLessonStatus);

module.exports = router;
