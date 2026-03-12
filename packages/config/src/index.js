export const appConfig = {
  appName: process.env.APP_NAME || "ai-just-project",
  apiPort: Number(process.env.API_PORT || 3000),
  bffPort: Number(process.env.BFF_PORT || 3100)
};

