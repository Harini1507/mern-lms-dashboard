import axios from "axios";

const API_URL = "http://localhost:8000/lessons";
const COURSE_ID = "6975b934778366abbaf0948f";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getLessons = async () => {
  const res = await axios.get(API_URL, authHeader());
  return res.data;
};

export const addLesson = async (lesson) => {
  const res = await axios.post(
    API_URL,
    {
      ...lesson,
      courseId: COURSE_ID,
    },
    authHeader(),
  );
  return res.data;
};

export const updateLessonStatus = async (id, status) => {
  const res = await axios.put(`${API_URL}/${id}`, { status }, authHeader());
  return res.data;
};
