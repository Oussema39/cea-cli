import {
  downloadTemplate,
  DownloadTemplateOptions,
  DownloadTemplateResult,
} from "giget";
import ora from "ora";
import chalk from "chalk";

export const downloadMyTemplate = async (
  source: string,
  options: DownloadTemplateOptions,
  templateName?: string
): Promise<DownloadTemplateResult> => {
  const spinner = ora(chalk.blue("Downloading template...")).start();

  try {
    const result = await downloadTemplate(source, options);
    spinner.clear();
    spinner.stop();
    console.log(
      chalk.blueBright(
        `✅ Template ${
          templateName ? templateName + " " : ""
        }downloaded successfully!`
      )
    );
    return result;
  } catch (error) {
    spinner.fail(chalk.red("Template download failed!"));
    console.error(chalk.red("Error:"), error);
    throw error;
  }
};
