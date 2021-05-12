const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  description: String,
  image: String,
  githubLink: String,
  deployedLink: String,
  main:{
    type: Boolean,
    default: 0
  } 
});

const Book = mongoose.model("Book", ProjectSchema);

module.exports = Book;
