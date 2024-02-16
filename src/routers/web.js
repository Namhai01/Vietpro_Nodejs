const express = require("express");
const UserController = require("../apps/controllers/User");
const AdminController = require("../apps/controllers/Admin");
const AuthController = require("../apps/controllers/Auth");
const ProductController = require("../apps/controllers/Product");
const CategoryController = require("../apps/controllers/Category");
const AuthMiddleware = require("../apps/middlewares/Auth");
const router = express.Router();

// Auth
router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.login);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);

// Admin
router.get("/admin/dashboard", AuthMiddleware.checkRole, AdminController.index);

// User
router.get("/admin/users", UserController.index);
router.get("/admin/users/create", UserController.create);
router.get("/admin/users/edit/:id", UserController.edit);
router.get("/admin/users/delete/:id", UserController.del);
// Category
router.get("/admin/categories", CategoryController.index);
router.get("/admin/categories/create", CategoryController.create);
router.get("/admin/categories/edit/:id", CategoryController.edit);
router.get("/admin/categories/delete/:id", CategoryController.del);
// Product
router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit/:id", ProductController.edit);
router.get("/admin/products/delete/:id", ProductController.del);

module.exports = router;
