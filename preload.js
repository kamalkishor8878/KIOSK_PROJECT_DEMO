const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('kioskAPI', {
  send: (channel, data) => {
    // allow only whitelisted channels
    const valid = ['app:exit', 'app:someAction'];
    if (valid.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, cb) => {
    const valid = ['app:state'];
    if (valid.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
  }
});

// const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld("kioskApp", {
//   // placeholder in case you want EXIT button later
//   exit: () => ipcRenderer.send("exit-app"),
// });
