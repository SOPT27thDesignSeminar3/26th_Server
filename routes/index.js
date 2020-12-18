var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', require('./users'));

router.use('/product', require('./product'));
router.use('/post', require('./post'));

module.exports = router;
