const express = require('express');
const router = express.Router();
const jogoController = require('../controllers/jogoController');

router.post('/jogo', jogoController.criarJogo);

router.get('/jogos', jogoController.listarJogos);

module.exports = router;
