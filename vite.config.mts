import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// Simple Nitro mock server plugin
function nitroMockPlugin(options = {}) {
  const { port = 5320, mockDir = 'apps/backend-mock' } = options;
  
  return {
    name: 'vite:nitro-mock',
    enforce: 'pre',
    async configureServer(server) {
      try {
        // Dynamically import nitropack
        const { createNitro, createDevServer, prepare, build } = await import('nitropack');
        
        const nitro = await createNitro({
          dev: true,
          preset: 'nitro-dev',
          rootDir: mockDir,
        });
        
        const mockServer = createDevServer(nitro);
        await mockServer.listen(port, { showURL: false });
        await prepare(nitro);
        await build(nitro);
        
        // Enhance Vite's printUrls to show mock server info
        const originalPrintUrls = server.printUrls;
        server.printUrls = () => {
          originalPrintUrls();
          console.log(`  \x1b[32m➜\x1b[0m  \x1b[1mMock Server\x1b[0m: \x1b[36mhttp://localhost:${port}/api\x1b[0m`);
        };
        
        console.log('\x1b[32m✓\x1b[0m \x1b[1mNitro Mock Server started\x1b[0m');
      } catch (error) {
        console.warn('⚠️  Mock server could not start:', error.message);
        console.warn('   API calls will fail unless you have a real backend');
      }
    },
  };
}

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
      // Add mock server plugin in development mode
      command === 'serve' && nitroMockPlugin({ port: 5320 }),
    ].filter(Boolean),

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
