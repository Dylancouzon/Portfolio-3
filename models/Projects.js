const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  githubLink: String,
  deployedLink: String
});

const Book = mongoose.model("Book", ProjectSchema);

module.exports = Book;
