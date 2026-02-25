import React from "react";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div>
      {role === "student" && <h1>Welcome Student</h1>}
      {role === "faculty" && <h1>Welcome Faculty</h1>}
    </div>
  );
}

export default Dashboard;