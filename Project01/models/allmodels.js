const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    username: {
      type: String
    },
    password: {
      type: String
    }
  },{
      collection: 'users'
  });
  
  module.exports = mongoose.model('User', User, 'user');