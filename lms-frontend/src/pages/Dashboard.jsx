import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:8000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Dashboard error:", err);
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (!data) return <h2>No data</h2>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Courses: {data.totalCourses}</p>
      <p>Total Lessons: {data.totalLessons}</p>
      <p>Completed Lessons: {data.completedLessons}</p>
      <p>Active Students: {data.activeStudents}</p>
    </div>
  );
}
