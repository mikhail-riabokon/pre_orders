const express = require('express');
const config = require('./config');
const renderInitialPage = require('./middlewares/renderInitialPage');
const app = express();

if (process.env.HOT) {
  const webpackDevMiddleware = require('./middlewares/webpackDev');
  const webpackHotMiddleware = require('./middlewares/webpackHot');

  app.use(webpackDevMiddleware.default);
  app.use(webpackHotMiddleware);
}

app.use('/assets', express.static('assets'));
app.get('*', renderInitialPage());

app.listen(config.port, () => {
  console.log('Server is started http://localhost:%s', config.port);
});
