require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const path = require('path');

const app = express();
app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.path);
  next();
});
app.use(staticMiddleware);
app.get('*', (req, res) => {
  const pathToIndex = path.join(__dirname, 'public', 'index.html');
  res.sendFile(pathToIndex);
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
