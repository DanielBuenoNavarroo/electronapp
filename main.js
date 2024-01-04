const { app, BrowserWindow } = require('electron');
const path = require('path');

function createMainWindow() {

  const mainWindow = new BrowserWindow({
    title: 'Electron',
    width: 1000,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createMainWindow);