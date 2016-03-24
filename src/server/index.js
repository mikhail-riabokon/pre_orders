const express = require('express');
const app = express();
const port = 9999;

app.listen(port, () => {
  console.log('Server is started http://localhost:%s', port);
});
