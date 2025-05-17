import fs, { Stats } from "fs";
import path from "path";

export const copyRecursiveSync = (src: string, dest: string) => {
  const exists = fs.existsSync(src);
  const stats: Stats = exists ? fs.statSync(src) : ({} as Stats);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};
