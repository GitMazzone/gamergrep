const {
  contextBridge,
  ipcRenderer,
} = require('electron');

// Expose APIs related to accessing the local computer
contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      console.log(message);
      ipcRenderer.send('notify', message);
    },
  },
  titlebarApi: {
    closeApplication() {
      ipcRenderer.send('exitApplication');
    },
    minimizeApplication() {
      ipcRenderer.send('minimizeApplication');
    },
  },
});
