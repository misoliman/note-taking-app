const fs = require("fs")
const chalk = require("chalk")
const validateFile = require("./validate");

const addNote = (title, body) => {
    const note = { title: title, body: body };
    let objectNotes = [];
    try {
        const stringNotes = fs.readFileSync("notes.txt", { encoding: 'utf8', flag: 'r' });
        objectNotes = JSON.parse(stringNotes)
    } catch (e) {
        objectNotes = [];

    }

    const noteExists = validateFile.validateNoteExistance(title, objectNotes)

    if (!noteExists) {
        objectNotes.push(note);
        const parcedNotes = JSON.stringify(objectNotes);
        fs.writeFileSync("notes.txt", parcedNotes)
        console.log(chalk.green.inverse("Note Added"))
    } else {
        console.log(chalk.red.inverse("Note Already Exists"))

    }


}

module.exports = {
    addNote
}

