import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false,
      },
    },
    plugins: {
      vue,
    },
    rules: {
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/multi-word-component-names": "off",
    },
  },
];
