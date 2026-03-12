export const testingService = {
  name: "testing",
  reportTypes: ["unit", "integration", "e2e"]
};

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  console.log(testingService);
}

