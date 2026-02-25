const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login works" });
});

module.exports = router;