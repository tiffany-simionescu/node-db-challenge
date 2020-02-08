const db = require('../database/dbConfig');

module.exports = {
  getResources,
  addResource,
  findResourceById
}

function getResources() {
  return db("resources");
}

function findResourceById(id) {
  return db("resources")
    .where({ id })
    .first()
    .select()
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return findResourceById(ids[0]);
    })
}

