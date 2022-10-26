import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstInteraction } from '@histoire/plugin-interaction'

export default defineConfig({
  plugins: [
    HstVue(),
    HstInteraction(),
  ],
})
