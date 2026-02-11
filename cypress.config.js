import { defineConfig } from 'cypress'
import { authenticator } from '@otplib/preset-default'

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    env: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
      SECRET: process.env.SECRET,
    },
    setupNodeEvents(on) {
      on('task', {
        generateTotp(secret) {
          return authenticator.generate(secret)
        }
      })
    },
  },
});
