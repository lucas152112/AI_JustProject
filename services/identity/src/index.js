export const identityService = {
  name: "identity",
  responsibilities: ["auth", "session", "rbac", "user-profile"]
};

if (process.argv[1] && process.argv[1].endsWith("index.js")) {
  console.log(identityService);
}

