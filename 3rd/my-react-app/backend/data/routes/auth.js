const express = require("express");
const router = express.Router();

const USERS = require("../data/users");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login success",
    role: user.role,
  });
});

module.exports = router;