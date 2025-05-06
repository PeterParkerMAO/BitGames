module.exports = (sequelize, DataTypes) => {
    const Time = sequelize.define('Time', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_membros: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Time;
};
