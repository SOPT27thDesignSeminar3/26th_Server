module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mall_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        main_image: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        star: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        reviews: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
