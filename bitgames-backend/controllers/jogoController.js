const { Jogo, Time } = require('../models');

const criarJogo = async (req, res) => {
    try {
        const { time1_id, time2_id, pontos_time1, pontos_time2 } = req.body;
        const jogo = await Jogo.create({ time1_id, time2_id, pontos_time1, pontos_time2 });
        res.status(201).json(jogo);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar jogo', error });
    }
};

const listarJogos = async (req, res) => {
    try {
        const jogos = await Jogo.findAll({
            include: [
                { model: Time, as: 'time1' },
                { model: Time, as: 'time2' }
            ]
        });
        res.status(200).json(jogos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar os jogos', error });
    }
};

module.exports = { criarJogo, listarJogos };