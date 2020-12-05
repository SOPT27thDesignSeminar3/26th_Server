var express = require('express');
var router = express.Router();
var { getList } = require('../controllers/shop');

/* GET users listing. */
router.get('/', getList);

module.exports = router;
