const mongoose         = require('mongoose');
const utils            = require('./../../utils');
const schema = require('./schema')

const userModel = mongoose.Schema(schema, {
  timestamps: true
});

userModel.pre('save', (next) => {
  var user = this;

  if (!this.password){
    next();
  } else {
    utils.hashPassword(this.password)
      .then((hash)=>{
        user.password = hash;
        next();
      })
      .catch(e => console.error(e));
  }
});

module.exports = mongoose.model('User', userModel);
