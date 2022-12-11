const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const { INVALID_URL_ERR_MESSAGE } = require('../utils/constants');

const validateUrl = (value, helpers) => {
  if (isURL(value)) {
    return value;
  }
  return helpers.message(INVALID_URL_ERR_MESSAGE);
};

const createUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    name: Joi.string().required().min(2).max(30),
    password: Joi.string().required(),
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const updateUserValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().trim(),
    name: Joi
      .string()
      .required()
      .min(2)
      .max(30)
      .trim(),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().trim(),
    director: Joi.string().required().trim(),
    duration: Joi.number().required(),
    year: Joi.string().required().trim(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validateUrl),
    trailerLink: Joi.string().required().custom(validateUrl),
    thumbnail: Joi.string().required().custom(validateUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().trim(),
    nameEN: Joi.string().required().trim(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  createUserValidation,
  loginValidation,
  updateUserValidation,
  createMovieValidation,
  deleteMovieValidation,
};
