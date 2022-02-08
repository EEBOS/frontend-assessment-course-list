import fs from 'fs-extra'
import path from 'path'
import { log } from './console.js'

fs.join = (...paths) => {
    return path.join.apply(null, paths)
}

fs.resolve = (...paths) => {
    return path.resolve.apply(null, paths)
}

fs.normalize = (pathName) => {
    return path.normalize(
        path.join(
            process.cwd(),
            pathName
        )
    )
}

fs.getExt = (pathName) => {
    return path.extname(pathName)
}

fs.dirExists = (pathName) => {
    
    try {
        return fs.existsSync(fs.normalize(pathName))
    } catch (err) {
        log(err)
        return err
    }
}

fs.getStats = (pathName) => {

    try {
        return fs.statSync(fs.normalize(pathName))
    } catch (err) {
        log(err)
        return err
    }
}

fs.dirList = (pathName) => {

    try {
        const dirPaths = fs.readdirSync(fs.normalize(pathName))

        return dirPaths.filter((url) => {
            return fs.getStats(`${pathName}/${url}`).isDirectory()
        })
    } catch (err) {
        log(err)
        return err
    }
}

fs.getFile = (pathName, media) => {
    const filename = fs.normalize(pathName)

    try {

        if (!fs.pathExistsSync(filename)) {
            log(`file does not exist: ${filename}`, 'warn')
            return
        }
    } catch (err) {
        log(err)
        return
    }

    if (media === undefined || media === null) {
        media = 'utf8'
    }

    try {
        let file

        file = fs.readFileSync(filename, media)

        if (/.json$/.test(filename)) {
            return JSON.parse(file)
        } else {
            return file
        }
    } catch (err) {
        log(err)
        return
    }
}

export default fs