const mongoose = require('mongoose');
  const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, },
    imageURL: { type: String, required: true },
    profession: { type: String, required: true },
    bio: { type: String, required: true },
  });
const userModel = mongoose.model('users', userSchema);   // using this we can perform CRUD elements 
module.exports = userModel;