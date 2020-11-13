const mongoose = require('mongoose');

const articleModel = mongoose.Schema({
  name: {type: String, required: '{PATH} is required!'},
  description: {type: String},
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleModel);
