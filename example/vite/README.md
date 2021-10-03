# Simpacker Vite example

## Install packages

```
$ npm install --save-dev vite rollup-plugin-output-manifest
```

## Add files

### vite.config.js

```javascript
import { defineConfig } from 'vite'
// Use this instead of vite's native 'manifest' option
// Since manifest's structure is different from Webpack/Parcel
// https://vitejs.dev/guide/backend-integration#backend-integration
import manifestPlugin from 'rollup-plugin-output-manifest'

export default defineConfig({
  root: 'app/javascript',
  publicDir: '/', // development
  build: {
    emptyOutDir: true,
    outDir: '../../public/packs',
    assetsDir: '',
    rollupOptions: {
      input: 'app/javascript/application.js',
      plugins: [
        manifestPlugin({
          outputPath: 'public/packs',
          publicPath: '/packs/'
        })
      ]
    }
  }
})
```

### app/javascript/application.js

```typescript
import { hello } from "./greeter";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("app");
  if (el) {
    el.textContent = hello("Rails");
  }
});
```

### app/javascript/greeter.js

```typescript
export function hello(name: string): string {
  return `Hello ${name}!`;
}
```

## Run

### Development

```
$ npx vite
```

### Production

```
$ npx vite build
```
