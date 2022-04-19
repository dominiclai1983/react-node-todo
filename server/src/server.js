const http = require('http');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');

require('dotenv').config();

const PORT = 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();