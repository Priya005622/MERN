const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,required: true,unique: true,},
    blog: {type: String,required: true,},
    userId: {type: String,required: true, unique:true},
},
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);