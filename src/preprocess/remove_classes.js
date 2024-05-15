import { readdirSync, statSync, readFile, writeFile } from 'fs'
import { join, extname } from 'path'

function readFiles(directory) {
    const files = readdirSync(directory)
    files.forEach((file) => {
        const fullPath = join(directory, file)
        if (statSync(fullPath).isDirectory()) {
            readFiles(fullPath)
        } else if (extname(fullPath) === '.svelte') {
            removeFocusClasses(fullPath)
        }
    })
}

function removeFocusClasses(filePath) {
    readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`)
            return
        }
        const regex = /(\s|^)(\w+:)*(focus|dark|active):[^\s"'<>`]+/g
        const newData = data.replace(regex, '')

        writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`)
            } else {
                console.log(`Processed file: ${filePath}`)
            }
        })
    })
}

readFiles('../')
