exports.seed = function(knex) {
  return knex("resources").insert([
    // Left some resource_descriptions blank
    { resource_name: "computer", resource_description: "" },
    { resource_name: "conference room", resource_description: "Used for company meetings" },
    { resource_name: "microphone", resource_description: "" },
    { resource_name: "delivery van", resource_description: "Used to ship orders" },
  ])
}