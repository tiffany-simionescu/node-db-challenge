const taskRouter = require('express').Router()
const Tasks = require('../models/task-model');

// GET - /api/tasks
taskRouter.get('/', (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      next(err);
    })
})

// POST - /api/tasks
taskRouter.post('/', (req, res, next) => {
  Tasks.addTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      next(err);
    })
})

module.exports = taskRouter;