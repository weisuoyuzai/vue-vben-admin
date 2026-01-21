import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isBuild = command === 'build';

  return {
    base: env.VITE_BASE || '/',
    
    plugins: [
      vue({
        script: {
          defineModel: true,
        },
      }),
      vueJsx(),
    ],

    resolve: {
      alias: {
        '#': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    build: {
      target: 'es2015',
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'jse/index-[name]-[hash].js',
        },
      },
    },

    esbuild: {
      drop: isBuild ? ['debugger'] : [],
      legalComments: 'none',
    },

    server: {
      host: true,
      port: Number(env.VITE_PORT) || 5173,
      proxy: {
        '/api': {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          target: 'http://localhost:5320/api',
          ws: true,
        },
      },
    },
  };
});
