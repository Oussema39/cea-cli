import { Command } from "commander";
import { COMMAND_NAMES, TEMPLATES_NAMES } from "../utils/constants";
import { initProject } from "../services/initProject";

const initCommand = new Command(COMMAND_NAMES.INIT);

initCommand
  .argument("<project-name>", "The name of the express project")
  .option(
    "-D, --target-dir <target-dir>",
    "The path where the project will be created",
    "."
  )
  .option(
    "-T, --template <template>",
    "The template which will be used (defaults to starter)",
    TEMPLATES_NAMES.STARTER
  )
  .option("-W, --with-folders", "Include basic folders struture", false)
  .action((name, options) => {
    initProject(name, options);
  });

export default initCommand;
