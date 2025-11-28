const jwt = require('jsonwebtoken');

const JWT_SECRET = 'meusegredo123';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ error: 'Token não fornecido' });

  const tokenValue = token.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(tokenValue, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
