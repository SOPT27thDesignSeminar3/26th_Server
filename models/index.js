// 데이터베이스의 테이블을 정의하는곳
// 실제 MySQL 테이블과 시퀄라이즈의 모델은 대응됨

'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const fs = require('fs');
const moment = require('moment');
const db = {};
const date = moment().format('YYYY[_]MM[_]DD');
const time = moment().format('H:mm:ss');
const log = fs.createWriteStream(`./${date}_sequelize.log`, {'flags': 'a'});
log.write(`\n\n[${time}]\n`);
config.logging = msg => log.write(`${msg}`);

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Shop = require('./shoppingmall')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);

db.Shop.hasMany(db.Product, {foreignKey: 'mall_id'});
db.Product.belongsTo(db.Shop, {foreignKey: 'mall_id'});

db.Banner = require('./banner')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);

db.Post.hasMany(db.Hashtag, {foreignKey: 'post_id'});
db.Hashtag.belongsTo(db.Post, {foreignKey: 'post_id'});

module.exports = db;


