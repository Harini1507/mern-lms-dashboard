import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      const data = await getDashboardStats();
      setStats(data);
    };

    loadStats();
  }, []);

  if (!stats) return <p style={{ padding: "20px" }}>Loading...</p>;

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <div className="list-item">📘 Total Courses: {stats.totalCourses}</div>
        <div className="list-item">📚 Total Lessons: {stats.totalLessons}</div>
        <div className="list-item">
          ✅ Completed Lessons: {stats.completedLessons}
        </div>
        <div className="list-item">
          👨‍🎓 Active Students: {stats.activeStudents}
        </div>
      </div>
    </div>
  );
}
