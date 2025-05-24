import fs from "fs";
import { join } from "path";
import {
  FOLDER_STRUCTURE,
  TEMPLATES_NAMES,
  TemplatesRepo,
} from "../utils/constants.js";
import chalk from "chalk";
import { downloadMyTemplate } from "../utils/downloadExpressTemplate.js";

interface InitProjectOptions {
  targetDir?: string;
  withFolders?: boolean;
  template?: TEMPLATES_NAMES;
}

export const initProject = async (
  appName: string | undefined,
  options: InitProjectOptions
) => {
  if (!appName) {
    console.log(chalk.red("❌ Please provide a project name:"));
    console.log(chalk.blueBright("Example: cea-lite init my-app"));
    process.exit(1);
  }

  const currentPath = process.cwd();
  const targetPath = join(currentPath, options?.targetDir ?? "", appName);

  if (fs.existsSync(targetPath)) {
    console.log(chalk.red(`❌ Folder "${appName}" already exists.`));
    process.exit(1);
  }

  try {
    // Create empty space (line)
    console.log();
    await downloadMyTemplate(
      `github:${TemplatesRepo}/${options.template ?? TEMPLATES_NAMES.STARTER}`,
      {
        dir: targetPath,
      },
      options.template
    );

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
    console.log(`👉 cd ${targetPath}`);
    console.log(`👉 npm install`);
    console.log(`👉 npm run dev`);
    console.log(`\nhappy development JOURNEYYY!`);
  } catch (err: unknown) {
    console.log(chalk.red("❌ Error copying project files:", err));
    process.exit(1);
  }
};
