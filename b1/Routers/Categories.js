// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategorie,
  editCategorie,
  delCategorie,
} = require("../Controllers/Categories");
router.get("/", getCategories);
router.post("/create", createCategorie);
router.post("/edit/:id", editCategorie);
router.post("/delete/:id", delCategorie);

module.exports = router;
