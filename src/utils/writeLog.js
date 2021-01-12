import { dateNow, timeNow } from '../utils/dateNow'
import fs from 'fs'
import path from 'path'

export default function writeLog (content) {
	const c = `${timeNow()} ${JSON.stringify(content)} \n`
	const logsPath = process.env.NODE_ENV !== 'production' ? '../public/logs' : '../app/logs'
  // appendFile：如果文件不存在则会创建文件，前提是文件夹存在
  fs.appendFile(path.resolve(__dirname, logsPath, `${dateNow()}.txt`), c, (err) => {
    if (err) throw err
  })
}
