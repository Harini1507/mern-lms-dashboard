const Course = require("../model/course");

exports.addCourse = async (req, res) => {
  const { title, description, duration } = req.body;

  const course = new Course({ title, description, duration });
  await course.save();

  res.json(course);
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
};
