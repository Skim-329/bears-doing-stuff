require('dotenv/config');
const express = require('express');
const db = require('./db');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const path = require('path');
const ClientError = require('./client-error');

const app = express();

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.path);
  next();
});

app.use(staticMiddleware);

app.get('/api/bearPrompts', (req, res, next) => {
  const sql = `
    select "prompt"
      from "bearPrompts"
  `;
  db.query(sql)
    .then(result => {
      const prompt = result.rows;
      if (!prompt || prompt.length === 0) {
        throw new ClientError(404, 'cannot find bear prompt');
      } else {
        res.json(prompt);
      }
    })
    .catch(err => next(err));
});

app.get('*', (req, res) => {
  const pathToIndex = path.join(__dirname, 'public', 'index.html');
  res.sendFile(pathToIndex);
});

app.use((req, res) => {
  res.sendFile('/index.html', {
    root: path.join(__dirname, 'public')
  });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
