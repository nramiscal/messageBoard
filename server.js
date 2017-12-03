var express = require('express');
var app = express();
var bP = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var PORT = 8000;

app.use(bP.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})
