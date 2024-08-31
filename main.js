const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js') // Carrega o script de preload
        }
    });

    mainWindow.loadURL('https://mail.google.com/chat/');
    mainWindow.setTitle('Google Meet Desktop developed by @Jaccon');

    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.executeJavaScript(`
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(stream => {
                    console.log('Microphone and Camera access granted');
                    stream.getTracks().forEach(track => track.stop());
                })
                .catch(error => {
                    console.error('Microphone and/or Camera access denied:', error);
                    alert('Por favor, habilite o acesso à câmera e ao microfone nas configurações do sistema.');
                });
        `);
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
