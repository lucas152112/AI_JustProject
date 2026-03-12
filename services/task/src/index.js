export const taskService = {
  name: "task",
  statuses: ["Todo", "In Progress", "In Review", "Ready for Test", "Done", "Blocked"]
};

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  console.log(taskService);
}

