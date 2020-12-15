const {Product, Shop} = require('../models');

module.exports = {
    getProdFilterCate: async (cate) => {
        try {
            var option = {}
            option.attributes = ['id', 'title', 'category', 'main_image', 'price','discount', 'star', 'reviews', 'likes', 'is_likes'];

            if (cate) 
                option.where = {category: cate };
            if (cate === 'bags')
                option.attributes = ['id', 'title', 'main_image', 'is_likes'];

            option.include = [{model: Shop, attributes: ['name']}]
            return await Product.findAll(option);
            
        } catch (err) {
            console.log('error : ', err);
            throw err;
        }
    }
}