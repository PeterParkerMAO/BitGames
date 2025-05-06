const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');

router.post('/time', timeController.criarTime);

router.get('/times', timeController.listarTimes);

module.exports = router;
