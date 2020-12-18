var express = require('express');
var router = express.Router();
const postControl = require('../controllers/postControl');
//const{ getList } = require('../models/post');


router.get('/', postControl.readAllPosts);
router.get('/hashtag', postControl.readAllHashtags);
router.get('/banner', postControl.readBanner);

module.exports = router;