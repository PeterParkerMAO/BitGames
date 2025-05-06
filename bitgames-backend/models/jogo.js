module.exports = (sequelize, DataTypes) => {
    const Jogo = sequelize.define('Jogo', {
        time1_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        time2_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pontos_time1: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        pontos_time2: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return Jogo;
};
