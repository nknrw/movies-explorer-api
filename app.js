require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimiter');
// const { cors } = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DB_URL } = require('./utils/config');
// const { login, createUser } = require('./controllers/users');
// const auth = require('./middlewares/auth');
// const NotFoundError = require('./errors/not-found-err');

mongoose.connect('mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use(requestLogger);

app.use(limiter);
app.use(helmet());
app.use(cors());

mongoose.connect(DB_URL);

app.use('/', require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use(require('./middlewares/errorHandler'));

app.listen(PORT);
