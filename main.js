const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development' || process.env.ELECTRON_DEV === 'true';

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    kiosk: true,
    fullscreen: true,
    frame: false,
    autoHideMenuBar: true,
    resizable: false,
    show: false,
    icon: path.join(__dirname, 'assets/images/appIcon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.setFullScreen(true);
  });

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: 'undocked' });
  } else {
    mainWindow.webContents.on('devtools-opened', () => mainWindow.webContents.closeDevTools());
  }

  mainWindow.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('file://')) e.preventDefault();
  });
}

ipcMain.on('app:exit', () => {
  app.quit();
});

app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());

// const { app, BrowserWindow } = require("electron");
// const path = require("path");

// let win;
// const isDev = true; // detect development mode

// // ✅ Enable auto reload only in development
// if (isDev) {
//   try {
//     require("electron-reload")(__dirname, {
//       electron: require(`${__dirname}/node_modules/electron`),
//     });
//     console.log("✅ Live Reload Enabled");
//   } catch (err) {
//     console.log("⚠️ Live Reload failed:", err);
//   }
// }

// function createWindow() {
//   win = new BrowserWindow({
//     width: 1920,
//     height: 1080,
//     kiosk: !isDev, // full kiosk only on build
//     fullscreen: !isDev,
//     autoHideMenuBar: true,
//     frame: isDev, // show window frame only in dev
//     backgroundColor: "#000",
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//       nodeIntegration: true,
//       contextIsolation: true,
//     },

//   });

//   win.loadFile("index.html");

//   // ✅ DevTools only in development
//   if (isDev) {
//     win.webContents.openDevTools();
//   }

//   // ❌ Disable DevTools shortcut in production
//   win.webContents.on("before-input-event", (event, input) => {
//     if (
//       !isDev &&
//       input.control &&
//       input.shift &&
//       input.key.toLowerCase() === "i"
//     ) {
//       event.preventDefault();
//     }
//   });
// }

// // ✅ App Ready
// app.whenReady().then(createWindow);
// app.commandLine.appendSwitch("disable-features", "AutofillServerCommunication");
// if (!isDev) {
//   win.webContents.on("devtools-opened", () => {
//     win.webContents.closeDevTools();
//   });
// }

// // ✅ Quit when all windows closed
// app.on("window-all-closed", () => {
//   app.quit();
// });
