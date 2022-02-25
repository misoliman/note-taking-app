const fs = require("fs")
const chalk = require("chalk")
const validateFile = require("./validate");
const retrieveNotesFile = require("./retrieveNotes")

const addNote = (title, body) => {
    const note = { title: title, body: body };
    let objectNotes = [];
    try {
        objectNotes = retrieveNotesFile.getNotes()
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

