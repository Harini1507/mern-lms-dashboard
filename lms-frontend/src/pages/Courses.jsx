import { useEffect, useState } from "react";
import { getCourses, addCourse } from "../services/courseService";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    const loadCourses = async () => {
      const data = await getCourses();
      setCourses(data);
    };

    loadCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!title.trim()) return;

    await addCourse({ title, description, duration });

    setTitle("");
    setDescription("");
    setDuration("");

    // reload courses after adding
    const data = await getCourses();
    setCourses(data);
  };

  return (
    <div className="page">
      <h2>📘 Courses</h2>

      {/* ADMIN ONLY */}
      {role === "admin" && (
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Duration (e.g. 4 weeks)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button onClick={handleAddCourse}>Add Course</button>
        </div>
      )}

      {courses.map((c) => (
        <div key={c._id} className="list-item" style={{ marginBottom: "16px" }}>
          <strong>{c.title}</strong>
          <div>{c.description}</div>
          <small>⏱ {c.duration}</small>
        </div>
      ))}
    </div>
  );
}
