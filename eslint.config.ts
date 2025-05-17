// @ts-check
import { globalIgnores } from "eslint/config";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  [globalIgnores([".scripts/"])],
  eslint.configs.recommended,
  tseslint.configs.recommended
);
