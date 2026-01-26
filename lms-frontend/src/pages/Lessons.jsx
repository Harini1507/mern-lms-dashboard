import { useEffect, useState } from "react";
import {
  getLessons,
  addLesson,
  updateLessonStatus,
} from "../services/lessonService";

export default function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const loadLessons = async () => {
      const data = await getLessons();
      setLessons(data);
    };
    loadLessons();
  }, []);

  const handleAddLesson = async () => {
    if (!title.trim()) return;

    await addLesson({
      title,
      status: "pending",
      courseId: "66975b934778366abbaf0948f",
    });

    const data = await getLessons();
    setLessons(data);
  };

  const markCompleted = async (id) => {
    await updateLessonStatus(id, "completed");
    const data = await getLessons();
    setLessons(data);
  };

  return (
    <div className="page">
      <h2>🧠 Lessons</h2>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Lesson title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddLesson}>Add Lesson</button>
      </div>

      <div style={{ maxWidth: "600px" }}>
        {lessons.map((l) => (
          <div
            key={l._id}
            className="list-item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              marginBottom: "12px",
            }}
          >
            {/* Title */}
            <span style={{ fontWeight: "500" }}>{l.title}</span>

            {/* Status badge */}
            <span
              style={{
                padding: "4px 12px",
                borderRadius: "12px",
                fontSize: "12px",
                background: l.status === "completed" ? "#16a34a" : "#f59e0b",
                color: "#fff",
              }}
            >
              {l.status}
            </span>

            {/* Action */}
            {l.status !== "completed" && (
              <button
                style={{ marginLeft: "auto" }}
                onClick={() => markCompleted(l._id)}
              >
                ✔ Done
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
