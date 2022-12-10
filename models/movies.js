const mongoose = require('mongoose');
const { isURL } = require('validator');

const { INVALID_URL_ERR_MESSAGE } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_URL_ERR_MESSAGE,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_URL_ERR_MESSAGE,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v),
      message: INVALID_URL_ERR_MESSAGE,
    },
  },
  owner: {
    type: mongoose.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
