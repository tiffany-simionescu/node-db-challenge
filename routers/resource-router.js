const resourceRouter = require('express').Router()
const Resources = require('../models/resource-model');

// GET - /api/resources
resourceRouter.get('/', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      next(err);
    })
})

// POST - /api/resources
resourceRouter.post('/', (req, res, next) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      next(err);
    })
})

module.exports = resourceRouter;