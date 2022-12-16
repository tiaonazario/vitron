/// <reference types="vite-electron-plugin/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    VSCODE_DEBUG?: "true";
    DIST: string;
    DIST_ELECTRON: string;
  }
}
