import ora from "ora";
import chalk from "../config/chalk";

export const downloadTxtFile = async (
  source: string,
  spinnerText: string = "Downloading file..."
): Promise<string> => {
  const spinner = ora(chalk.blue(spinnerText)).start();
  try {
    const names = await fetch(source);
    const textData = await names.text();
    spinner.clear();
    spinner.stop();
    return textData;
  } catch (err) {
    spinner.fail(chalk.red("Fetch failed!"));
    console.log("fetch error", err);
    throw err;
  }
};
