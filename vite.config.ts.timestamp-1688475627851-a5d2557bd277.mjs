// vite.config.ts
import { defineConfig } from "file:///D:/IONIC_EXMAPLES/cameradessin/camera+dessin/node_modules/vite/dist/node/index.js";
import react from "file:///D:/IONIC_EXMAPLES/cameradessin/camera+dessin/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/IONIC_EXMAPLES/cameradessin/camera+dessin/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  optimizeDeps: {
    exclude: [`@ionic/pwa-elements/loader`]
  },
  plugins: [
    react(),
    VitePWA({ registerType: "autoUpdate" })
  ]
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts',
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJT05JQ19FWE1BUExFU1xcXFxjYW1lcmFkZXNzaW5cXFxcY2FtZXJhK2Rlc3NpblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSU9OSUNfRVhNQVBMRVNcXFxcY2FtZXJhZGVzc2luXFxcXGNhbWVyYStkZXNzaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0lPTklDX0VYTUFQTEVTL2NhbWVyYWRlc3Npbi9jYW1lcmErZGVzc2luL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbYEBpb25pYy9wd2EtZWxlbWVudHMvbG9hZGVyYF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFZpdGVQV0EoeyByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyB9KVxuICBdLFxuIFxuIFxuICAvLyB0ZXN0OiB7XG4gIC8vICAgZ2xvYmFsczogdHJ1ZSxcbiAgLy8gICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgLy8gICBzZXR1cEZpbGVzOiAnLi9zcmMvc2V0dXBUZXN0cy50cycsXG4gIC8vIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsb0JBQW9CO0FBQzNWLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLDRCQUE0QjtBQUFBLEVBQ3hDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRLEVBQUUsY0FBYyxhQUFhLENBQUM7QUFBQSxFQUN4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
