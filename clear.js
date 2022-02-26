const fs = require("fs")
const chalk = require("chalk")

const clearNotes = () => {
    try {
        const emptyNotes = [];
        fs.writeFileSync("notes.txt", JSON.stringify(emptyNotes)) // Notes are kept a JSON and must be stringified

        console.log(chalk.green.inverse("Note cleared"))


    } catch (e) {
        console.log(chalk.red.inverse("Couldn't clear "))



    }
}

module.exports = {

    clearNotes
}