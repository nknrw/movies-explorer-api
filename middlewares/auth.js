require('dotenv').config();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const AuthorizationError = require('../errors/authorization-err');
const { AUTH_ERR_MESSAGE } = require('../utils/constants');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthorizationError(AUTH_ERR_MESSAGE);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new AuthorizationError(AUTH_ERR_MESSAGE);
  }
  req.user = payload;
  next();
};

module.exports = auth;
