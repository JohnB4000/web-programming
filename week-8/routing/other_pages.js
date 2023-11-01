let express = require('express');
let router = express.Router();
module.exports = router;

router.get('/', function(req, res) { res.send("Hello Express these are some other pages"); });

router.get('/main', function(req, res) {
  let options = {
    root: 'E:/Node/hello_express',
    headers: {
      'Content-Type': 'text/html'
    }
  }
  res.sendFile("./index.html", options);
});

router.get('/page1', function(req, res) { res.send("This is page 1 of some other pages"); });

router.get('/page2', function(req, res) { res.send("This is page 2 of some other pages"); });

router.get('*', function(req, res) { res.send("Other Page not found!"); });