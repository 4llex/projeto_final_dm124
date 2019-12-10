const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());


//const notFound = require('./middleware/not-found');
app.use(notFound);

/* app.use((request, response, next) => {
  const data = {
    message: "Colocando SERVIDOR no ar!!! Funcionou ... GOD BLESS!",
  }

  response
    .status(200)
    .json(data)
});*/

module.exports = app; 