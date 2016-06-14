"use strict"

const {app, BrowserWindow} = require('electron')

function ready () {
  const win = new BrowserWindow()
  win.loadURL(`file://${__dirname}/index.html`)
  win.openDevTools({detach: true})
  win.show()
}

app.on("ready", ready)
