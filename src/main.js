const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDevEnvironment = !app.isPackaged;

const createWindow = async () => {
  const RESOURCES_PATH = '../assets';

  const getAssetPath = (...paths) => path.join(RESOURCES_PATH, ...paths);

  const mainWindow = new BrowserWindow({
    show: false,
    width: 1550,
    height: 872,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

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
};

if (isDevEnvironment) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '..', 'node_modules', '.bin', 'electron'),
  });
}

app.on('window-all-closed', () => {
  app.quit();
});

app.whenReady().then(createWindow);
