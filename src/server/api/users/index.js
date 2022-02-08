import fs from '../../utils/file-system.js'

const routes = {
    base: '/users'
}
const files = {
    basePath: 'src/server/api/users'
}

files.user = files.basePath + '/data/user.json'

export const init = (router) => {
    router.get(routes.base, (req, res) => {
        
        try {
            res.json(fs.getFile(files.user))
        } catch (err) {
            res.send(err)
        }
    })
}

export default {
    init,
    routes
}