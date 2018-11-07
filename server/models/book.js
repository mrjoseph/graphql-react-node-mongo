const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);
