const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações para eventos do Node
    },
    baseUrl: 'https://www.apsen.com.br',
  },
});