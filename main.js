'use strict';

const { app, BrowserWindow, systemPreferences } = require('electron');

let win;

app.on('ready', () => {
	win = new BrowserWindow({
        width: 600,
        height: 600,
        show: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null
    });

    win.setMenu(null);
	win.webContents.openDevTools();
    console.log(process.versions);

    systemPreferences.askForMediaAccess('microphone').then(success => {
        console.log('Microphone access granted:', success);
    });
});
