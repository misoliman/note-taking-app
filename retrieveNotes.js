const fs = require("fs")

const getNotes = () => {
    const stringNotes = fs.readFileSync("notes.txt", { encoding: 'utf8', flag: 'r' });

    return JSON.parse(stringNotes)

}

module.exports = {
    getNotes
}