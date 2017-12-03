var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {
  index : (req, res) => {
    Message.find({}, false, true).populate('comments').exec(function(err, messages){
      res.render('index', {messages})
    });
  },

  add : (req, res) => {
    var message = new Message(req.body);
    message.save((err) => {
      console.log(err);
      res.redirect('/')
    });
  }
}
