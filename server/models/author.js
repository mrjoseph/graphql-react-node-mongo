const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Author', authorSchema);
