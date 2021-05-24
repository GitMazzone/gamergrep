const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');

const isDevEnvironment = !app.isPackaged;

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../assets');

  const getAssetPath = (...paths) => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  const mainWindow = new BrowserWindow({
    show: false,
    width: 1550,
    height: 872,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, './src/api/preload.js')
    }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

}

// This causes app to crash any time a change is made in this file.
if (isDevEnvironment) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

// When ipcMain intercepts a command, do something
ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
});

app.whenReady().then(createWindow);
