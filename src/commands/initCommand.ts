import { Command } from "commander";
import { COMMAND_NAMES } from "../utils/constants";
import chalk from "../config/chalk";

const initCommand = new Command(COMMAND_NAMES.INIT);

initCommand
  .argument("<project-name>", "The name of the express project")
  .option("--folder", "The path where the project will be created", ".")
  .action((name) => {
    console.log(chalk.blue(name));
  });

export default initCommand;
