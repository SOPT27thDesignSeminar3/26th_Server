var express = require('express');
var router = express.Router();
var { getList } = require('../controllers/shop');


/**
 * @swagger
 *  /product:
 *    get:
 *      tags:
 *      - product
 *      description: 제품 전체 조회
 *      produces:
 *      - application/json
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */

 /**
 * @swagger
 *  /product:
 *    get:
 *      tags:
 *      - product
 *      description: 카테고리 별 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *      - in: "query"
 *        name: "category"
 *        description: "closet & bags & shoes 선택"
 *        schema:
 *          type: object
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 */
router.get('/', getList);


module.exports = router;
