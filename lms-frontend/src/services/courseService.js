import axios from "axios";

const API_URL = "http://localhost:8000/courses";

export const getCourses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addCourse = async (course) => {
  const res = await axios.post(API_URL, course);
  return res.data;
};
