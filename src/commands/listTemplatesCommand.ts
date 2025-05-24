import { Command } from "commander";
import { COMMAND_NAMES } from "../utils/constants";
import { listTemplates } from "../services/listTemplates";

const listTemplatesCommand = new Command(COMMAND_NAMES.LIST_TEMPALTES);

listTemplatesCommand.action(() => {
  listTemplates();
});

export default listTemplatesCommand;
