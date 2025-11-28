const mongoose = require('mongoose');

async function connectDB() {
  if (process.env.NODE_ENV === 'test') {
    console.log("MongoDB ignorado durante os testes");
    return;
  }

  try {
    await mongoose.connect('mongodb://localhost:27017/tarefas');
    console.log('MongoDB conectado!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

module.exports = connectDB;
