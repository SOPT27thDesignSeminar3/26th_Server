var express = require('express');
var router = express.Router();
var { getList } = require('../controllers/shop');


router.get('/', getList);


module.exports = router;
