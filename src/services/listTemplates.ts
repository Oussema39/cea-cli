import { downloadTxtFile } from "../utils/downloadTxtFile";
import chalk from "../config/chalk";

const templatesFileUrl =
  "https://raw.githubusercontent.com/Oussema39/express-templates/main/templates.json";

export const listTemplates = async () => {
  try {
    const content = await downloadTxtFile(
      templatesFileUrl,
      "Checking new temlplates..."
    );
    const data = content.toString();
    const templates = JSON.parse(data);

    console.log("\nAvailable Templates:");
    for (const [key, desc] of Object.entries(templates)) {
      console.log(`- ${chalk.cyan(key)}: ${desc}`);
    }
  } catch (err: any) {
    console.error(chalk.red("Error fetching templates:"), err.message);
    process.exit(1);
  }
};
