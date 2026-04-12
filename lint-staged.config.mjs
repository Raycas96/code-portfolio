import { readFileSync } from "node:fs";

const quoteFiles = (files) => files.map((file) => `"${file.replace(/"/g, '\\"')}"`).join(" ");

const isDeclarationFile = (file) => file.endsWith(".d.ts");

const packageJson = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const hasTestScript = Boolean(packageJson?.scripts?.test);

const config = {
  "*.{js,jsx,mjs,cjs,ts,tsx}": (files) => {
    const sourceFiles = files.filter((file) => !isDeclarationFile(file));

    if (sourceFiles.length === 0) return [];

    const quoted = quoteFiles(sourceFiles);
    return [`eslint --fix --max-warnings=0 ${quoted}`, `prettier --write ${quoted}`];
  },
  "*.d.ts": (files) => {
    if (files.length === 0) return [];

    return `prettier --write ${quoteFiles(files)}`;
  },
  "*.{json,md,css,scss,yml,yaml}": (files) => {
    if (files.length === 0) return [];

    return `prettier --write ${quoteFiles(files)}`;
  },
  "*": () => (hasTestScript ? "npm test" : []),
};

export default config;
