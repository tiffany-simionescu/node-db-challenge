const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectRouter = require('../routers/project-router');
const resourceRouter = require('../routers/resource-router');
const taskRouter = require('../routers/task-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Node DB Sprint Challenge!</h2>`);
})

server.use((req, res) => {
  res.status(400).json({
    message: "Route was not found"
  })
})

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "An internal error occurred. Please try again later."
  })
})

// Logger Function
function logger(req, res, next) {
  console.log(`${req.method} - ${req.url} - ${Date(Date.now())}`);
  next();
}

module.exports = server;