const fs = require("fs")
const chalk = require("chalk")
const retrieveNotesFile = require("./retrieveNotes")

const getTheNote = (title) => {
    try {
        const notes = retrieveNotesFile.getNotes();
        for (note of notes) {
            if (note.title === title) {
                console.log(note)
                console.log(chalk.green.inverse("Note fetched"))
                return;
            }
        }
        console.log(chalk.red.inverse("No Note for Such Title"))


    } catch (e) {
        console.log(chalk.red.inverse("No Notes to Fetch "))



    }
}

module.exports = {

    getTheNote
}
