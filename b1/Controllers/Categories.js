const Categorie = require("../Models/Categorie");

module.exports.getCategories = async (req, res) => {
  try {
    const users = await Categorie.find({});
    res.json(users);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.createCategorie = async (req, res) => {
  try {
    if (req.body) {
      const name = req.body.name;
      await Categorie.create({
        name,
      });
    } else {
      res.json({ status: "error" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.editCategorie = async (req, res) => {
  try {
    const id = req.params.id;
    if (id || req.body.name) {
      await Categorie.findByIdAndUpdate(
        { _id: id },
        { name: req.body.name },
        { new: true }
      );
      const categorie = await Categorie.find({});
      res.json({ status: "success", categorie });
    } else {
      res.json({ status: "error" });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports.delCategorie = async (req, res) => {
  try {
    const id = req.params.id;
    await Categorie.findByIdAndDelete({ _id: id });
  } catch (error) {
    console.log(error.message);
  }
};
