const fs = require("fs")

const retrieveNotesFile = require("./retrieveNotes")

const chalk = require("chalk")


const list = () => {
    try {
        const notes = retrieveNotesFile.getNotes();
        for (note of notes) {
            console.log(note)
        }

    } catch (e) {
        console.log(chalk.red.inverse("No Notes to List"))

    }
}

module.exports = {
    list
}
