import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "dist",
            "cypress.config.ts",
            "android",
            "ios",
            "node_modules",
        ],
    },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            eslintConfigPrettier,
        ],
        files: ["./src/components/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            eslintPluginReact,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "no-console":
                process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger":
                process.env.NODE_ENV === "production" ? "warn" : "off",
        },
    }
);
