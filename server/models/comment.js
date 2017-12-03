const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: String,
  comment: String,
  _message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true})


mongoose.model('Comment', CommentSchema);
