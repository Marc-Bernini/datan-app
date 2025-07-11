import { defineConfig } from "cypress";

export default defineConfig({
    env: {
        homePath: "/",
        supportPath: "/support",
    },
    e2e: {
        baseUrl: "http://localhost:5173",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
