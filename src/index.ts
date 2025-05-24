#!/usr/bin/env node

import { program } from "commander";
import initCommand from "./commands/initCommand";
import chalk from "chalk";
import listTemplatesCommand from "./commands/listTemplatesCommand";

program.version("1.0.0");

program.addCommand(initCommand);
program.addCommand(listTemplatesCommand);

process.on("uncaughtException", (err) => {
  console.log(chalk.bgRed(err.message));
  console.log("Use --help for a list of available commands.");
  process.exit(1);
});

program.parse(process.argv);
