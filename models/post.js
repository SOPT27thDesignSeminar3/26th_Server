module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        preview: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        create_date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    }, 
    { 
        freezeTableName: true,
        timestamps: false,
    });
};