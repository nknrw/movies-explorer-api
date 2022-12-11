require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DB_URL } = require('./utils/config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(limiter);
app.use(helmet());
app.use(require('./middlewares/cors'));

mongoose.connect(
  DB_URL,
  // { family: 4 }, // Расскомментировать для использования IPv4
);

app.use('/', require('./routes'));

app.use(errorLogger);

app.use(errors());

app.use(require('./middlewares/errorHandler'));

app.listen(PORT);
