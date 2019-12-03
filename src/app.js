const express = require('express');
const app = express();

app.use((request, response, next) => {
  const data = {
    message: "Colocando servidor no ar!!! Funcionou ... GOD BLESS!",
  }

  response
    .status(200)
    .json(data)
});

module.exports = app;