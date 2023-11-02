let express = require('express');
let app = express();
const port = 8082;

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('./main_page', { appTitle: 'Hello Express' });
});

app.get('/help', function(req, res) {
  res.render('./help_page', { appTitle: 'Hello Express Help' });
});

app.get('*', function(req, res) {
  res.send("Page not found in Hello Express!");
});

app.listen(port, function() {
  console.log("Server is started on port " + port)
});