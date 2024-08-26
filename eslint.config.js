import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import lingui from "eslint-plugin-lingui"; // import eslint-plugin-lingui
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      lingui: lingui, // add it to plugins
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // add lingui rules your want
      "lingui/no-unlocalized-strings": [
        2,
        {
          ignoreFunction: ["cn"],
          ignoreAttribute: ["alt"],
        },
      ],
      "lingui/t-call-in-function": 2,
      "lingui/no-single-variables-to-translate": 2,
      "lingui/no-expression-in-message": 2,
      "lingui/no-single-tag-to-translate": 2,
      "lingui/no-trans-inside-trans": 2,
      "lingui/text-restrictions": [
        2,
        {
          rules: [
            {
              patterns: ["''", '"', "’", "“"],
              message: "This string contains forbidden characters",
            },
          ],
        },
      ],
    },
  }
);
