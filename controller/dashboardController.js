const Course = require("../model/course");
const Lesson = require("../model/Lesson");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalCourses = await Course.countDocuments();
    const totalLessons = await Lesson.countDocuments();
    const completedLessons = await Lesson.countDocuments({
      status: "completed",
    });

    res.status(200).json({
      totalCourses,
      totalLessons,
      completedLessons,
      activeStudents: 120, // static
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
