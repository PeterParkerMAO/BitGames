module.exports = (sequelize, DataTypes) => {
    const Competicao = sequelize.define('Competicao', {
        jogo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edicao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Competicao;
};
