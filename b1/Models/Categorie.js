const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false }
);

const Categorie = mongoose.model("Categorie", categorieSchema);
module.exports = Categorie;
