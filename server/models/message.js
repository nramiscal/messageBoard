const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: String,
  message: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true});

mongoose.model('Message', MessageSchema);
