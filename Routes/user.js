const mongoose =require('mongoose');
const plm= require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/rdein");
const userschema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  profileImage:String,
  contact:Number,
  board:[],
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: "post"
  }]


});
userschema.plugin(plm);
module.exports =mongoose.model("user",userschema);