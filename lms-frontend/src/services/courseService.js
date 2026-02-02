import axios from "axios";

const API_URL = "http://localhost:8000/courses";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCourses = async () => {
  const res = await axios.get(API_URL, authHeader());
  return res.data;
};

export const addCourse = async (course) => {
  const res = await axios.post(API_URL, course, authHeader());
  return res.data;
};
