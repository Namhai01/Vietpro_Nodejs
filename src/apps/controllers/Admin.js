const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const index = async (req, res) => {
  const users = await UserModel.countDocuments();
  const prodcuts = await ProductModel.countDocuments();
  res.render("admin/dashboard", {
    users: users,
    prodcuts: prodcuts,
  });
};

module.exports = {
  index: index,
};
