const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = function swaggerDocs(app) {

  if (process.env.NODE_ENV === 'test') {
    console.log("Swagger desativado nos testes");
    return;
  }

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Tarefas',
        version: '1.0.0',
        description: 'Documentação da API de Tarefas'
      },
      servers: [{ url: 'http://localhost:3000' }]
    },
    apis: ['./src/routes/*.js']
  };

  const swaggerSpec = swaggerJsDoc(options);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log('📄 Swagger disponível em: http://localhost:3000/docs');
};
