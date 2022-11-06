const { SERVER_ERROR_MESSAGE, SERVER_ERR_CODE } = require('../utils/constants');

module.exports = ((err, req, res, next) => {
  const { statusCode = SERVER_ERR_CODE, message = SERVER_ERROR_MESSAGE } = err;
  res.status(statusCode).send({
    message: statusCode === SERVER_ERR_CODE ? SERVER_ERROR_MESSAGE : message,
  });
  next();
});
