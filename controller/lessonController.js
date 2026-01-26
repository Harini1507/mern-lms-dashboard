const Lesson = require("../model/Lesson");

// ADD lesson
exports.addLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET lessons
exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE lesson status  ✅ THIS MUST EXIST
exports.updateLessonStatus = async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    res.json(lesson);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
