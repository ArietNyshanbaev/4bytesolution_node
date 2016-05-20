var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  email : {type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  fullName: String,
  bio: String
});

userSchema.methods.name = function() {
  return this.fullName || this.username;
};

userSchema.methods.email = function() {
  return this.email;
};

