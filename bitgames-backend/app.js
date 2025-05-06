const express = require('express');
const app = express();
const sequelize = require('./models/index');
const competicaoRoutes = require('./routes/competicaoRoutes');
const timeRoutes = require('./routes/timeRoutes');
const jogoRoutes = require('./routes/jogoRoutes');

app.use(express.json());

app.use('/api', competicaoRoutes);
app.use('/api', timeRoutes);
app.use('/api', jogoRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida!');
    })
    .catch((error) => {
        console.error('Erro ao conectar com o banco de dados:', error);
    });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
