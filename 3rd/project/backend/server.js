const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// dummy users
const users = [
  { email: "student@gmail.com", password: "123", role: "student" },
  { email: "faculty@gmail.com", password: "123", role: "faculty" }
];

// login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({ role: user.role });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});