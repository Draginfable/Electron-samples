'use strict';

const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const url = require('url');
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

    console.log(screen.getAllDisplays());
});
