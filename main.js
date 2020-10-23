'use strict';

const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.allowRendererProcessReuse = false;

app.on('ready', () => {
	win = new BrowserWindow({
        width: 600,
        height: 600,
        show: true,
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.on('closed', () => {
        win = null
    });

    win.webContents.on('new-window', (e ,url) => {
        e.preventDefault();
        shell.openExternal(url);
    });

    win.setMenu(null);
	win.webContents.openDevTools();
    console.log(process.versions);
});
