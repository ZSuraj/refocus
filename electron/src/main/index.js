import {
  app,
  shell,
  BrowserWindow,
  ipcMain,
  Notification,
  desktopCapturer,
  nativeImage
} from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import fs from 'fs'
import path from 'path'
import os from 'os'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  // Handle "send-notification" event
  ipcMain.on('send-notification', (event, notificationData) => {
    const notification = new Notification({
      title: notificationData.title || 'Default Title',
      body: notificationData.body || 'Default body text.',
      icon: notificationData.icon || path.join(__dirname, 'assets', 'electron.svg') // Optional
    })

    notification.show()

    notification.on('click', () => {
      console.log('Notification clicked!')
      // You can do something like opening a window or focus the app
    })
  })

  ipcMain.on('take-screenshot', async (event, { formData }) => {
    console.log(1)

    const sources = await desktopCapturer.getSources({
      types: ['screen'],
      thumbnailSize: { width: 1920, height: 1080 }
    })

    console.log(2)

    // Take the first screen (you can modify it to capture a specific one if needed)
    const screenSource = sources[0]

    try {
      // Convert the captured thumbnail to a nativeImage object
      const image = nativeImage.createFromBuffer(screenSource.thumbnail.toPNG())

      // Define a path to save the image (e.g., in the user's home directory)
      const savePath = path.join(os.homedir(), 'screenshot.png')

      // Save the image as PNG to the file system
      fs.writeFileSync(savePath, image.toPNG()) // Save the PNG file

      const response = await fetch('http:localhost:6969/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data && data.assistant_message) {
        const notification = new Notification({
          title: data.assistant_message.title || 'Stay focused',
          body: data.assistant_message.body || 'Let’s go, ship that app by month’s end 🔥'
          // icon: notificationData.icon || path.join(__dirname, 'assets', 'electron.svg') // Optional
        })

        notification.show()
      }

      // Return the saved path so the renderer can access it
      return savePath
    } catch (error) {
      console.error('Error capturing screenshot:', error)
      throw error
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  console.log('APPAPPP')

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
