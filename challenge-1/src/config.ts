import dotenv from "dotenv";

if (process.env.DOTENV_PATH) {
  dotenv.config({ path: process.env.DOTENV_PATH });
}

const contextApi = "/api";
export const routeConfig = {
  v1ContextApi: `${contextApi}`,
};

const config = {
  port: parseInt(process.env.PORT as string),
};

export const PORT = config.port || 3000;

export default config;
