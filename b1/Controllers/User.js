const User = require("../Models/User");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createUsers = async (req, res) => {
  try {
    if (req.body) {
      const { username, email, phone, gender } = req.body;
      await User.create({
        username,
        email,
        phone,
        gender,
      });
    } else {
      res.json({ status: "error" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.editUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, email, phone, gender } = req.body;
    if (id || req.body) {
      await User.findByIdAndUpdate(
        { _id: id },
        { username, email, phone, gender },
        { new: true }
      );
      const users = await User.find({});
      res.json({ status: "success", users });
    } else {
      res.json({ status: "error" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.delUsers = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error.message);
  }
};
