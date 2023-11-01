let express = require('express');
let router = express.Router();
module.exports = router;

router.get('/', function(req, res) { res.send("Hello Express help pages"); });

router.get('/main', function(req, res) {
  let options = {
    root: 'E:/Node/hello_express',
    headers: {
      'Content-Type': 'text/html'
    }
  }
  res.sendFile("./index.html", options);
});

router.get('/page1', function(req, res) { res.send("Hello Express  -  Help Page 1"); });

router.get('/page2', function(req, res) { res.send("Hello Express  -  Help Page 2"); });

router.get('*', function(req, res) { res.send("Help Page not found!"); });