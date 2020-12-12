var express = require('express');
var router = express.Router();
var { getList } = require('../controllers/shop');


/**
 * @swagger
 *  /product:
 *    get:
 *      tags:
 *      - product
 *      description: 모든 제품 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *      responses:
 *       200:
 *        description: 제품 조회 성공
 *        schema:
 *           $ref: '#/components/schemas/Product'
 */
router.get('/', getList);

module.exports = router;
