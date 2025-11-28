const express = require('express');
const connectDB = require('./src/config/database');
const swaggerDocs = require('./src/config/swagger');

const taskRoutes = require('./src/routes/taskRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Tarefas funcionando!');
});

app.use('/api', taskRoutes);
app.use('/auth', authRoutes);

if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

if (process.env.NODE_ENV !== 'test') {
  swaggerDocs(app);
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = app;
