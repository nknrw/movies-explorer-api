const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');
const { NOT_FOUND_ERR_MESSAGE } = require('../utils/constants');
const { loginValidation, createUserValidation } = require('../middlewares/validation');

router.post('/signin', loginValidation, login);
router.post('/signup', createUserValidation, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError(NOT_FOUND_ERR_MESSAGE));
});

module.exports = router;
