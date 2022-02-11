import fs from '../../utils/file-system.js'

const routes = {
    base: '/users'
}
const files = {
    basePath: 'src/server/api/users'
}

routes.courses = routes.base + '/courses'
files.user = files.basePath + '/data/user.json'
files.courses = files.basePath + '/data/courses.json'

export const init = (router) => {
    router.get(routes.base, (req, res) => {
        
        try {
            res.json(fs.getFile(files.user))
        } catch (err) {
            res.send(err)
        }
    })

    router.get(routes.courses, (req, res) => {

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