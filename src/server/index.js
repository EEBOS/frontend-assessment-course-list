import express from 'express'
import { log, color } from './utils/console.js'

const app = express()
const port = 5000

app.use(express.static('dist'))

app.listen(port, () => {
    const url = color(`http://localhost:${port}`, 'blue', true)

    log(`\n\nServer running at ${url}\n\n`, 'info')
})