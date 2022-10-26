# Histoire interaction testing

```
pnpm add -D @histoire/plugin-interaction
```


Add the plugin in histoire config:

```js
import { defineConfig } from 'histoire'
import { HstInteraction } from '@histoire/plugin-interaction'

export default defineConfig({
  plugins: [
    HstInteraction({
      // Options here
    }),
  ],
})
```
