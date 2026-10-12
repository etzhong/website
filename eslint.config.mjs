import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default [
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
