const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("kioskApp", {
  // placeholder in case you want EXIT button later
  exit: () => ipcRenderer.send("exit-app"),
});
