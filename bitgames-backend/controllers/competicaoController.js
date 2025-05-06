const criarCompeticao = (req, res) => {
    res.status(201).send('Competição criada com sucesso!');
};

const listarCompeticoes = (req, res) => {
    res.status(200).send('Lista de competições');
};

module.exports = {
    criarCompeticao,
    listarCompeticoes
};
