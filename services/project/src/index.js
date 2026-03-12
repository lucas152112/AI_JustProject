export const projectService = {
  name: "project",
  resources: ["projects", "project_members", "milestones", "versions"]
};

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  console.log(projectService);
}

