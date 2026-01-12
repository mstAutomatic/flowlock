import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
//追加分
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
//追加分ここまで

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  //追加分
  //PrettierをESLintのルールとして組み込む
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // ESLint と Prettier の競合ルールを無効化（必ず最後)
  prettierConfig,

  //追加分ここまで

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
