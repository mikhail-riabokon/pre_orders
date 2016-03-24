const express = require('express');
const config = require('./config');
const app = express();

app.listen(config.port, () => {
  console.log('Server is started http://localhost:%s', config.port);
});
