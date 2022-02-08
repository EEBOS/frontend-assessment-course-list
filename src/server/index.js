import express from 'express'
import { log, color } from './utils/console.js'
import api from './api/index.js'

const app = express()
const port = api.config.port

app.use(express.static('dist'))
app.set('json spaces', 2)
api.init(app)

app.listen(port, () => {
    const url = color(`http://localhost:${port}`, 'blue', true)

    log(`\n\nServer running at ${url}\n\n`, 'info')
})