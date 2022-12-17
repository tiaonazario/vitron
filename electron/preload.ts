import { ipcRenderer, contextBridge } from "electron";

const api = {
  sendMessage: (message: string) => {
    ipcRenderer.send("message", message);
  },

  // Here function for TitleBar
  Minimize: () => {
    ipcRenderer.send("minimize");
  },
  Maximize: () => {
    ipcRenderer.send("maximize");
  },
  Close: () => {
    ipcRenderer.send("close");
  },

  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
};

contextBridge.exposeInMainWorld("Main", api);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
