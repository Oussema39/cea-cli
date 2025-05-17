declare namespace NodeJS {
  interface ProcessEnv extends Record<string, string> {
    NODE_ENV: "production" | "development";
  }
}
