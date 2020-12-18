const util = require('../modules/util');
const MESSAGE = require('../modules/responseMessage');
const CODE = require('../modules/statusCode');
const { Post, Hashtag } = require('../models')
console.log(3);
module.exports = {
    readAllPosts : async (req, res) => {
        try {
            //console.log(3);
            const posts = await Post.findAll();
            //console.log(4);
            //res.send("포스트 출력 시작까지는 들어왔다ㅠ"); << 이거쓰면 두번 요청이다 안댐!
            console.log('포스트 출력 시작');
            return res.status(CODE.OK).send(util.success(CODE.OK, MESSAGE.READ_POST_FAIL, posts));
        
        } catch (error) {
            console.log('error : ', error);
            return res.status(CODE.BAD_REQUEST).send(util.fail(CODE.BAD_REQUEST, MESSAGE.READ_POST_ALL_FAIL));
            throw error;
        }
    },

    readAllHashtags : async (req, res) => {
        try {
            const hashtags = await Hashtag.findAll();
            console.log('해시태그 출력 시작');
            return res.status(CODE.OK).send(util.success(CODE.OK, MESSAGE.READ_HASHTAG_FAIL, hashtags));
        
        } catch (error) {
            console.log('error : ', error);
            return res.status(CODE.BAD_REQUEST).send(util.fail(CODE.BAD_REQUEST, MESSAGE.READ_HASHTAG_ALL_FAIL));
            throw error;
        }
    },
    readBanner : async (req, res) => {
        try {
            const hashtags = await Hashtag.findAll();
            console.log('배너 출력 시작');
            return res.status(CODE.OK).send(util.success(CODE.OK, "배너출력", hashtags));
        
        } catch (error) {
            console.log('error : ', error);
            return res.status(CODE.BAD_REQUEST).send(util.fail(CODE.BAD_REQUEST, "배너출력 실패"));
            throw error;
        }
    },
}