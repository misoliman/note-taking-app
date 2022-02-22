const chalk = require("chalk")

const progarmCommands = {
    "Add Note": "node index.js add -title'Type Note Title' -body'Type Note Body'",
    "Remove Note": "node index.js remove -title'Type Note Title'",
    "Lit All Notes": "node index.js list",
    "Fetch Note": "node index.js fetch -title'Type Note Title'"
};

const help = () => {
    for (command in progarmCommands) {
        console.log("")
        console.log(chalk.green(`${command} : ${progarmCommands[command]}`));
    }
    console.log("")
};

module.exports = { help }