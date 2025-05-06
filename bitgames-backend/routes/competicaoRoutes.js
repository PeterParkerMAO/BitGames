const express = require('express');
const router = express.Router();
const competicaoController = require('../controllers/competicaoController'); // Certifique-se que este caminho está correto

router.post('/competicao', competicaoController.criarCompeticao);

router.get('/competicoes', competicaoController.listarCompeticoes);

module.exports = router;
