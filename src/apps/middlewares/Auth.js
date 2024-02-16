const checkRole = (req, res, next) => {
  if (req.session.role === "admin" && req.session.user) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};
const checkLogin = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/admin/dashboard");
  } else {
    next();
  }
};

module.exports = {
  checkRole,
  checkLogin,
};
