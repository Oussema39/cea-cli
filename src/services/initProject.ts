import fs from "fs";
import path from "path";
import { copyRecursiveSync } from "../utils/copyRecursive.js";

export const initProject = (appName: string | undefined) => {
  if (!appName) {
    console.error("❌ Please provide a project name:");
    console.log("Example: create-express-app my-app");
    process.exit(1);
  }

  const currentPath = process.cwd();
  const targetPath = path.join(currentPath, appName);
  const templatePath = path.join(__dirname, "..", "templates", "starter");

  if (fs.existsSync(targetPath)) {
    console.error(`❌ Folder "${appName}" already exists.`);
    process.exit(1);
  }

  try {
    copyRecursiveSync(templatePath, targetPath);

    const packageJsonPath = path.join(targetPath, "package.json");
    const packageJson = fs.readFileSync(packageJsonPath, "utf-8");
    const updated = packageJson.replace("<APP_NAME>", appName);
    fs.writeFileSync(packageJsonPath, updated);

    console.log(`✅ Project "${appName}" created successfully.`);
    console.log(`👉 cd ${appName}`);
    console.log(`👉 npm install`);
    console.log(`👉 npm run dev`);
  } catch (err: unknown) {
    console.error("❌ Error copying project files:", err);
    process.exit(1);
  }
};
