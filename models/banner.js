module.exports = (sequelize, DataTypes) => {
    return sequelize.define('banner', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, 
    { 
        freezeTableName: true,
        timestamps: true,
    });
};