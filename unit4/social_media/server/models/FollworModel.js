const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FollowerSchema = new Schema({
  follower:[{
    user:{
      type: Schema.Types.ObjectID,
      ref: "User"
    },}
  ],
  following:[{
    user:{
    type: Schema.Types.ObjectID,
    ref: "User"
  },}
],
  
})

module.exports = mongoose.model("Follower",FollowerSchema)