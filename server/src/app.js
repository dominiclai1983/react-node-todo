const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

app.use(morgan('combined'));
//middleware for server logging
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
//it parse the incoming request to JSON

app.use('/api', api);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;