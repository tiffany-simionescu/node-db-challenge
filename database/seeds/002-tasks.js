exports.seed = function(knex) {
  return knex("tasks").insert([
    // Left some task_notes intentionally blank
    { project_id: 1, task_description: "Pr-1 task-1 description", task_notes: "Pr-1 task-1 notes", task_completed: false  },
    { project_id: 1, task_description: "Pr-1 task-2 description", task_notes: "", task_completed: true  },
    { project_id: 2, task_description: "Pr-2 task-1 description", task_notes: "Pr-2 task-1 notes", task_completed: false  },
    { project_id: 2, task_description: "Pr-2 task-2 description", task_notes: "", task_completed: true  },
    { project_id: 3, task_description: "Pr-3 task-1 description", task_notes: "Pr-3 task-1 notes", task_completed: false  },
    { project_id: 3, task_description: "Pr-3 task-2 description", task_notes: "", task_completed: true  },
    { project_id: 4, task_description: "Pr-4 task-1 description", task_notes: "Pr-4 task-1 notes", task_completed: false  },
    { project_id: 4, task_description: "Pr-4 task-2 description", task_notes: "", task_completed: true  }
  ])
}