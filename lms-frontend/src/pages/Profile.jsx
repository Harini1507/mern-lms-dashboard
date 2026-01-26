import { useState } from "react";

export default function Profile() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Harini",
    email: "harinisenthil15072004@gmail.com",
    role: "Student",
  });

  return (
    <div className="page">
      <h2>👤 Profile</h2>

      {!editing ? (
        <>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>

          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      ) : (
        <>
          <input
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <button onClick={() => setEditing(false)}>Save</button>
        </>
      )}
    </div>
  );
}
