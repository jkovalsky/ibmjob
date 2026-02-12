import { defineConfig } from 'cypress'
import { authenticator } from '@otplib/preset-default'

export default defineConfig({
  e2e: {
    env: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
      SECRET: process.env.SECRET,
    },

    setupNodeEvents(on) {
      on('task', {
        generateTotp(secret: string) {
          return authenticator.generate(secret)
        },
      })
    },

    experimentalOriginDependencies: true,
  },
})
