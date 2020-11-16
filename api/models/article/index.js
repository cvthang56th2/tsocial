const mongoose = require('mongoose');
const schema = require('./schema')

const articleModel = mongoose.Schema(schema, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleModel);
