const {
    getProdFilterCate
} = require('../services/shop');
const util = require('../modules/util');
const MESSAGE = require('../modules/responseMessage');
const CODE = require('../modules/statusCode');

module.exports = {
    getList: async (req, res) => {
        try {
            const { category } = req.query;
            if (category && (category !== 'closet' && category !== 'shoes' && category !== 'bags'))
                return res.status(CODE.BAD_REQUEST).send(util.fail(CODE.BAD_REQUEST, MESSAGE.NULL_VALUE));

            const result = await getProdFilterCate(category);

            const data = await result.map(r => {
                if (r.price && r.discount) {
                    r.dataValues.sale_price = r.price * r.discount * 0.01;
                }
                r.discount += '%'
                return r;
            })

            return res.status(CODE.OK).send(util.success(CODE.OK, MESSAGE.SUCCESS_READ, data));
        } catch (error) {
            console.log('error : ', error);
            res.status(CODE.INTERNAL_SERVER_ERROR).send(util.fail(CODE.INTERNAL_SERVER_ERROR, MESSAGE.NO_CHANGE_ROW));
            throw error;
        }
    }
}
