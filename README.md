# 📌 API de Tarefas — Projeto Completo

Este projeto é uma **API RESTful** construída com **Node.js + Express + MongoDB**, incluindo:

- CRUD completo de Tarefas
- Autenticação JWT
- Rotas protegidas
- Mongoose
- Testes com Jest
- Documentação com Swagger
- Estrutura MVC
- Issues, README e organização profissional

---

# 📁 Estrutura do Projeto

```
api-tarefas/
├── server.js
├── package.json
├── tests/
│   └── basic.test.js
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── swagger.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Task.js
│   │   └── User.js
│   └── routes/
│       ├── authRoutes.js
│       └── taskRoutes.js
```

---

# 🚀 Como Rodar o Projeto

## 1️⃣ Clonar o repositório
```
git clone https://github.com/SEU_USUARIO/api-tarefas.git
cd api-tarefas
```

## 2️⃣ Instalar dependências
```
npm install
```

## 3️⃣ Iniciar o MongoDB
Certifique-se que o MongoDB está rodando em:
```
mongodb://localhost:27017/
```

## 4️⃣ Rodar o servidor
```
npm start
```
Ou usando nodemon:
```
npx nodemon server.js
```

Servidor rodará em:
```
http://localhost:3000
```

---

# 📘 Documentação (Swagger)
Acesse a documentação completa dos endpoints em:
```
http://localhost:3000/docs
```

---

# 🔐 Autenticação JWT
As rotas de escrita (POST, PUT, DELETE) exigem **token JWT**.

Enviar no header:
```
Authorization: Bearer SEU_TOKEN
```

---

# 📚 Endpoints da API

## ✅ **AUTH**

### 🔹 Registrar usuário
**POST /auth/register**
```json
{
  "email": "teste@gmail.com",
  "password": "123456"
}
```

### 🔹 Login
**POST /auth/login**
```json
{
  "email": "teste@gmail.com",
  "password": "123456"
}
```
**Resposta**:
```json
{
  "token": "eyJh..."
}
```

---

# 📝 Endpoints de Tarefas

## 🔹 Criar tarefa (protegida)
**POST /api/tasks**
```json
{
  "title": "Minha tarefa",
  "description": "Descrição"
}
```

## 🔹 Listar tarefas
**GET /api/tasks**

## 🔹 Obter tarefa por ID
**GET /api/tasks/:id**

## 🔹 Atualizar tarefa (protegida)
**PUT /api/tasks/:id**

## 🔹 Deletar tarefa (protegida)
**DELETE /api/tasks/:id**

---

# 🧪 Testes
Usamos **Jest + Supertest**.

### Rodar testes:
```
npm test
```

O projeto inclui ao menos 1 teste funcional:
```
tests/basic.test.js
```
Saída esperada:
```
PASS  tests/basic.test.js
```

---

# ⚙ Dependências principais
- express
- mongoose
- jsonwebtoken
- bcryptjs
- swagger-jsdoc
- swagger-ui-express
- jest
- supertest
- nodemon

---

# 👥 Integrantes do Grupo
- Nome 1 — Função
- Nome 2 — Função
- Nome 3 — Função

*(Edite com seus nomes reais)*

---

# 📌 Divisão de Tarefas
- Fulano — Controllers / Models
- Ciclano — Rotas / Swagger
- Beltrano — Testes / README / Issues

---

# 🗂 Issues (GitHub)
O repositório contém:
- Planejamento das tarefas
- Issues detalhadas
- Checklist do projeto
- Histórico de commits

---

# 🎯 Conclusão
Este projeto entrega **todos os requisitos solicitados**, incluindo:

✔ CRUD completo
✔ JWT
✔ Rotas protegidas
✔ Testes funcionando
✔ Documentação Swagger
✔ README completo
✔ Arquitetura organizada
✔ Banco conectado

---

Se quiser, posso gerar também:
✅ TEMPLATE de Issue
✅ TEMPLATE de Pull Request
✅ Commits padrões

