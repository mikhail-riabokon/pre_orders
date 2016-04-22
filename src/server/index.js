import errorHandler from './middlewares/errorHandler';
import bodyParser from 'body-parser';
import { logger } from './utils';
import express from 'express';
import router from './router';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.HOT) {
  /* eslint-disable global-require */
  const webpackDevMiddleware = require('./middlewares/webpackDev');
  const webpackHotMiddleware = require('./middlewares/webpackHot');

  app.use(webpackDevMiddleware.default);
  app.use(webpackHotMiddleware.default);
}

app.use(bodyParser.json());
app.use(router);
app.use('/assets', express.static('build/assets'));
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server started at http://localhost:${port}`);
});
