const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PostSchema = new Schema({
  
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  details: {type: {}},
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
