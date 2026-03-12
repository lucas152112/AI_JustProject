export const deploymentService = {
  name: "deployment",
  environments: ["dev", "test", "pp", "prod"]
};

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  console.log(deploymentService);
}

