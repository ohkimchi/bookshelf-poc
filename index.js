var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/router');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {
  console.log('Listening on port %s.', PORT);
});
