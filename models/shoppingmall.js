module.exports = (sequelize, DataTypes) => {
    return sequelize.define('shoppingmall', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};
