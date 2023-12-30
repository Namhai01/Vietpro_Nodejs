// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUsers,
  editUsers,
  delUsers,
} = require("../Controllers/User");
router.get("/", getUsers);
router.post("/create", createUsers);
router.post("/edit/:id", editUsers);
router.post("/delete/:id", delUsers);

module.exports = router;
