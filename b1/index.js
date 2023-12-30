// app.js
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const USER_ROUTES = require("./Routers/User");
const CATEGORIES_ROUTES = require("./Routers/Categories");

app.use("/admin/users", USER_ROUTES);
app.use("/admin/categories", CATEGORIES_ROUTES);

app.listen(process.env.PORT || 3000, () => {
  connectDB();
  console.log(`Server start at port ${process.env.PORT || 3001}`);
});
