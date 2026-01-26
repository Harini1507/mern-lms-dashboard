const express = require("express");
const router = express.Router();
const lessonController = require("../controller/lessonController");

router.post("/", lessonController.addLesson);
router.get("/", lessonController.getLessons);
router.put("/:id", lessonController.updateLessonStatus);

module.exports = router;
