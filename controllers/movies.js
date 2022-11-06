const Movies = require('../models/movies');

const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-err');

const { NOT_FOUND_ERR_MESSAGE, BAD_REQUEST_ERR_MESSAGE, FORBIDDEN_ERR_MESSAGE } = require('../utils/constants');

module.exports.getMovies = (req, res, next) => {
  Movies.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  Movies.create({ ...req.body, owner: req.user._id })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(BAD_REQUEST_ERR_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movies.findById(movieId)
    .orFail(new NotFoundError(NOT_FOUND_ERR_MESSAGE))
    .then((movie) => {
      if (!movie.owner.equals(req.user._id)) {
        next(new ForbiddenError(FORBIDDEN_ERR_MESSAGE));
      } else {
        Movies.findByIdAndRemove(movieId)
          .then(() => res.send({ message: 'Фильм удален' }))
          .catch(next);
      }
    })
    .catch(next);
};
