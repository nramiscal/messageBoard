var messages = require('../controllers/messages');
var comments = require('../controllers/comments');

module.exports = function(app){

  // message routes
  app.get('/', messages.index);
  app.post('/add_message', messages.add);

  // comment routes
  app.post('/add_comment/:id', comments.add)


}
