import express from 'express'
import courses from "./courses/index.js"

const router = express.Router()
const config = {
    schema: 'public',
    api: '/api',
    port: 5000,
    timeout: 1000
}

export const init = (app) => {
    courses.init(router)
    app.use(config.api, router)
}

export default {
    init,
    config
}