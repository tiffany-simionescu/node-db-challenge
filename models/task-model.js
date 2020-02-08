const db = require('../database/dbConfig');

module.exports = {
  getTasks,
  addTask,
  findTaskById
}

function getTasks() {
  return db("tasks");
}

function findTaskById(id) {
  return db("tasks")
    .where({ id })
    .first()
    .select()
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return findTaskById(ids[0]);
    })
}