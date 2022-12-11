const allowedCors = [
  'http://movies-explorer.nknrw.nomoredomains.icu', // адрес фронтенда
  'https://movies-explorer.nknrw.nomoredomains.icu', // адрес фронтенда
  'http://localhost:3000',
  'https://localhost:3000',
  // 'http://localhost:4000', // для разработки на локальном сервере
  // 'https://localhost:4000', // для разработки на локальном сервере
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};

module.exports = cors;
