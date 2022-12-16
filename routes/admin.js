const express = require("express");
const router = express.Router();
module.exports = router;

const adminControllers = require("../controllers/admin");

router.post("/add-new-user", adminControllers.postAddNewUser);
