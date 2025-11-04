// preload.js
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

