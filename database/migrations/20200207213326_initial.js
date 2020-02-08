
exports.up = async function(knex) {
  await knex.schema.createTable("projects", projects => {

    projects.increments("id")

    projects.string("project_name")
        .notNullable()

    projects.string("project_description")
    
    projects.boolean("project_completed")
        .notNullable()
        .defaultTo(false)
  })

  await knex.schema.createTable("tasks", tasks => {

    tasks.increments("id")

    tasks.string("task_description")
        .notNullable()

    tasks.string("task_notes")

    tasks.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")

    tasks.boolean("task_completed")
        .notNullable()
        .defaultTo(false)
  })

  await knex.schema.createTable("resources", resources => {

    resources.increments("id")

    resources.string("resource_name")
        .notNullable()
        .unique()

    resources.string("resource_description")
  })

  await knex.schema.createTable("projects_resources", pr => {
    
    pr.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")

    pr.integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")

    pr.primary(["project_id", "resource_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("projects")
};
