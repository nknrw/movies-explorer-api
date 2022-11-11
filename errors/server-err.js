const { SERVER_ERR_CODE } = require('../utils/constants');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = SERVER_ERR_CODE;
  }
}

module.exports = ServerError;
