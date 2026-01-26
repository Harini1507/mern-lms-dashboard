const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: String, // e.g. "4 weeks"
  },
});

module.exports = mongoose.model("Course", courseSchema);
