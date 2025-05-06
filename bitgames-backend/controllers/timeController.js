const { Time } = require('../models');

const jogosValidos = {
    'LoL': 5,
    'Valorant': 5,
    'CS': 5,
    'FIFA': 2,
    'Overwatch': 6,
    'Mario Kart': 9,
    'Marvel Rivals': 6
};

const criarTime = async (req, res) => {
    const { nome, numero_membros, jogo } = req.body;

    if (!nome || !numero_membros || !jogo) {
        return res.status(400).json({ message: 'Nome, número de membros e jogo são obrigatórios.' });
    }

    if (!jogosValidos[jogo]) {
        return res.status(400).json({ message: `Jogo inválido. Jogos válidos: ${Object.keys(jogosValidos).join(', ')}` });
    }

    if (numero_membros !== jogosValidos[jogo]) {
        return res.status(400).json({ message: `O número de membros para ${jogo} deve ser ${jogosValidos[jogo]}` });
    }

    try {
        const time = await Time.create({ nome, numero_membros, jogo });
        res.status(201).json(time);
    } catch (error) {
        console.error('Erro ao criar time:', error);
        res.status(500).json({ message: 'Erro ao criar time', error: error.message });
    }
};

const listarTimes = async (req, res) => {
    try {
        const times = await Time.findAll();
        res.status(200).json(times);
    } catch (error) {
        console.error('Erro ao listar os times:', error);
        res.status(500).json({ message: 'Erro ao listar os times', error: error.message });
    }
};

module.exports = { criarTime, listarTimes };
