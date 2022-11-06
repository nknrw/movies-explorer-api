const AUTH_ERR_CODE = 401;
const BAD_REQUEST_ERR_CODE = 400;
const CONFLICT_ERR_CODE = 409;
const FORBIDDEN_ERR_CODE = 403;
const NOT_FOUND_ERR_CODE = 404;
const SERVER_ERR_CODE = 500;

const AUTH_ERR_MESSAGE = 'Необходима авторизация';
const BAD_REQUEST_ERR_MESSAGE = 'Переданы некорректные данные';
const CONFLICT_ERR_MESSAGE = 'Пользователь с таким email уже существует';
const FORBIDDEN_ERR_MESSAGE = 'Недостаточно прав';
const NOT_FOUND_ERR_MESSAGE = 'Запрашиваемый ресурс не найден';
const SERVER_ERR_MESSAGE = 'На сервере произошла ошибка';

const INVALID_URL_ERR_MESSAGE = 'Некорректный URL';

module.exports = {
  AUTH_ERR_CODE,
  BAD_REQUEST_ERR_CODE,
  CONFLICT_ERR_CODE,
  FORBIDDEN_ERR_CODE,
  NOT_FOUND_ERR_CODE,
  SERVER_ERR_CODE,
  AUTH_ERR_MESSAGE,
  BAD_REQUEST_ERR_MESSAGE,
  CONFLICT_ERR_MESSAGE,
  FORBIDDEN_ERR_MESSAGE,
  NOT_FOUND_ERR_MESSAGE,
  SERVER_ERR_MESSAGE,
  INVALID_URL_ERR_MESSAGE,
};
