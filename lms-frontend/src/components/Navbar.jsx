import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        background: "#020617",
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <Link to="/">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
