const express = require("express");
const session = require("express-session");
const config = require("config");
const app = express();

app.use(
  session({
    secret: config.app.session_key,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static(config.get("app").STATIC_PATH));
app.set("views", config.get("app").view_src);
app.set("view engine", config.get("app").view_engine);

app.use("/", require("../routers/web"));

module.exports = app;
