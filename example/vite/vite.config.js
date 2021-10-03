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
