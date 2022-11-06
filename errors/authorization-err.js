const { AUTH_ERR_CODE } = require('../utils/constants');

class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = AUTH_ERR_CODE;
  }
}

module.exports = AuthorizationError;
