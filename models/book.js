const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  desc: String,
  img: String,
  url: String,
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
