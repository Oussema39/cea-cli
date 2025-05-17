import { resolve } from "path";
import { copyRecursiveSync } from "../utils/copyRecursive";

console.log(__dirname);

const srcTemplates = resolve("templates");
const outTemplates = resolve("bin", "templates");

copyRecursiveSync(srcTemplates, outTemplates);
