exports.seed = function(knex) {
  return knex("projects").insert([
    { project_name: "project 1", project_description: "project 1 description", project_completed: false },
    { project_name: "project 2", project_description: "project 2 description", project_completed: true },
    { project_name: "project 3", project_description: "project 3 description", project_completed: false },
    // project 4 description intentionally left blank
    { project_name: "project 4", project_description: "", project_completed: true }
  ])
}