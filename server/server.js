const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.get('/', () => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
