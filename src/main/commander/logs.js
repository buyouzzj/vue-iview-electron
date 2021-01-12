import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const logsPath = process.env.NODE_ENV !== 'production' ? '../public/logs' : '../app/logs'
export default class Logs {
  async getFiles () {
    const files = await readdir(path.resolve(__dirname, logsPath))
    global.mainWindow.webContents.send('log-files', files)
  }
  async showFileContent (file) {
    const content = await readFile(path.resolve(__dirname, logsPath, file))
    global.mainWindow.webContents.send('show-file-content', content.toString())
  }
}
