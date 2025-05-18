import fs from "fs";
import { join } from "path";
import { copyRecursiveSync } from "../utils/copyRecursive.js";
import { FOLDER_STRUCTURE } from "../utils/constants.js";
import chalk from "chalk";

interface InitProjectOptions {
  folder?: string;
  withFolders?: boolean;
}

export const initProject = (
  appName: string | undefined,
  options?: InitProjectOptions
) => {
  if (!appName) {
    console.log(chalk.red("❌ Please provide a project name:"));
    console.log(chalk.blueBright("Example: create-express-app my-app"));
    process.exit(1);
  }

  const currentPath = process.cwd();
  const targetPath = join(currentPath, options?.folder ?? "", appName);
  const templatePath = join(__dirname, "..", "templates", "starter");

  if (fs.existsSync(targetPath)) {
    console.log(chalk.red(`❌ Folder "${appName}" already exists.`));
    process.exit(1);
  }

  try {
    copyRecursiveSync(templatePath, targetPath);

    const packageJsonPath = join(targetPath, "package.json");
    const packageJson = fs.readFileSync(packageJsonPath, "utf-8");
    const updated = packageJson.replace("<APP_NAME>", appName);
    fs.writeFileSync(packageJsonPath, updated);

    if (options?.withFolders) {
      for (const folder of FOLDER_STRUCTURE) {
        const folderPath = join(targetPath, "src", folder);
        fs.mkdirSync(folderPath);
      }
      console.log(
        chalk.blueBright(
          `✅ Created these folder structure src/[${FOLDER_STRUCTURE.join(
            ", "
          )}]`
        )
      );
    }

    console.log(
      chalk.blueBright(`✅ Project "${appName}" created successfully.`),
      "\n"
    );
    console.log(`👉 cd ${appName}`);
    console.log(`👉 npm install`);
    console.log(`👉 npm run dev`);
  } catch (err: unknown) {
    console.log(chalk.red("❌ Error copying project files:", err));
    process.exit(1);
  }
};
