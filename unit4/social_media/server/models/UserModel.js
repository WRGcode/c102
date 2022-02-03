const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    select: false
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  profilePcURL:{
  type: String
  },
  newMessagePopup:{
    type: Boolean,
    default: true
  },
  unReadNoification:{
    type: Boolean,
    default: true
  },
  role:{
    type: String,
    enum:["user", "admin"],
    default: true
  },
  resetToken: {type:String},
  expireToken: {type:Date}

},{timestamps:true})

module.exports = mongoose.model("User", UserSchema)