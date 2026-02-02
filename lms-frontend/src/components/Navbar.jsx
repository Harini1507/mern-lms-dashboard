import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#020617",
        padding: "15px 30px",
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #1e293b",
        alignItems: "center",
      }}
    >
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/profile">Profile</Link>

      {/* Logout */}
      <button
        onClick={handleLogout}
        style={{
          marginLeft: "auto",
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "8px 14px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
