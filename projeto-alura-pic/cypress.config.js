const { defineConfig } = require("cypress");

defaultCommandTimeout: 10000

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
