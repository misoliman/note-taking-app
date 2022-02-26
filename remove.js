const fs = require("fs")
const chalk = require("chalk")
const retrieveNotesFile = require("./retrieveNotes")

const removeNote = (title) => {
    try {
        const notes = retrieveNotesFile.getNotes();
        const filteredNotes = notes.filter((note) => {
            if (note.title === title)
                return false
            return true
        })

        if (filteredNotes.length === notes.length) {
            console.log(chalk.red.inverse("Not Note for Given Title"))
            return
        }



        fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes)) // Notes are kept a JSON and must be stringified

        console.log(chalk.green.inverse("Note removed"))


    } catch (e) {
        console.log(chalk.red.inverse("No Notes to found "))



    }
}

module.exports = {

    removeNote
}