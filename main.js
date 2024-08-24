const { app, BrowserWindow , Menu} = require('electron');
const path = require('path');
const expressApp = require('./server/app');  // Import the Express app

const createWindow = () => {
    const win = new BrowserWindow({
        width: 780,
        height: 550,
        webPreferences: {
            preload: path.join(__dirname, './server/routes/preload.js'),
            nodeIntegration: true  // Allow Node.js integration
        }
    });
    win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

Menu.setApplicationMenu(null);