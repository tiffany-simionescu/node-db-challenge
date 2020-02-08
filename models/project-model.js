const db = require('../database/dbConfig');

module.exports = {
  getProjects,
  findProjectById,
  addProject
}

function getProjects() {
  return db("projects");
}

function findProjectById(id) {
  return db("projects")
    .where({ id })
    .first()
    .select()
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return findProjectById(ids[0]);
    });
}