module.exports = (sequelize, DataTypes) => {
    return sequelize.define('hashtag', {
        id: {
            primaryKey: true,
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, 
        { 
    freezeTableName: true,
    timestamps: false,
    });
};