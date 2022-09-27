const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      username: "Pedro",
      age: 20,
    },
    {
      username: "Hotdogaso",
      age: 30,
    },
  ]);
});

module.exports = router;
