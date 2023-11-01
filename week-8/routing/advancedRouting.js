let express = require('express');
let app = express();
let help_server = require('./help_pages.js');
let other_server = require('./other_pages.js');
const port = 8080;

app.get('/', function(req, res) {
  res.send("Welcome to Hello Express");
});

app.use('/help', help_server);

app.use('/other', other_server);

app.get('*', function(req, res) {
  res.send("Page not found in Hello Express!");
});

app.listen(port, function() {
  console.log("Server is started on port " + port)
});