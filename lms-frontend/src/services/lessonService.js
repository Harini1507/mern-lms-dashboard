import axios from "axios";

const API_URL = "http://localhost:8000/lessons";

const COURSE_ID = "6975b934778366abbaf0948f";

export const getLessons = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addLesson = async (lesson) => {
  const res = await axios.post(API_URL, {
    ...lesson,
    courseId: COURSE_ID, // ✅ THIS WAS MISSING
  });
  return res.data;
};

export const updateLessonStatus = async (id, status) => {
  const res = await axios.put(`${API_URL}/${id}`, { status });
  return res.data;
};
