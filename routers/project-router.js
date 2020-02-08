const projectRouter = require("express").Router()
const Projects = require('../models/project-model');

// GET - /api/projects
projectRouter.get('/', (req, res, next) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      next(err);
    })
})

// POST - /api/projects
projectRouter.post('/', (req, res, next) => {
  projectRouter.post(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      next(err);
    })
})

module.exports = projectRouter;