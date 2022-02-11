import fs from '../../utils/file-system.js'

const routes = {
    base: '/courses'
}
const files = {
    basePath: 'src/server/api/courses'
}

files.courses = files.basePath + '/data/courses.json'

export const init = (router) => {
    router.get(routes.base, (req, res) => {
        
        try {
            res.json(fs.getFile(files.courses))
        } catch (err) {
            res.send(err)
        }
    })
}

export default {
    init,
    routes
}