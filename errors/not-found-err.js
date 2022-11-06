const { NOT_FOUND_ERR_CODE } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOT_FOUND_ERR_CODE;
  }
}

module.exports = NotFoundError;
