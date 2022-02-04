console.log('start...')

const { app, BrowserWindow }  = require('electron')

app.on('ready', () => {
    console.log('on ready...')
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // mainWindow.loadURL('https://baidu.com') effective
    mainWindow.loadFile('./index.html')

    const secondWindow = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        },
        parent: mainWindow
    })
    // mainWindow.loadURL('https://baidu.com') effective
    secondWindow.loadFile('./second.html')
})
