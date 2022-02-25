const chalk = require("chalk")

const maxArguments = 3; //maximum arguments for the program node index.js command -title"" -body""

const validateProgramArguments = (argv) => {
    if (argv.length > maxArguments) {
        throw new Error("Too many arguments for program")
    }
};

const validateTitle = (title) => {
    const commandSyntaxPrefix = `-title`;

    for (let i = 0; i < commandSyntaxPrefix.length; ++i) {
        console.log(commandSyntaxPrefix[i], title[i])
        if (commandSyntaxPrefix[i] !== title[i])
            throw new Error("Invalid title command")
    }


};

const validateBody = (body) => {
    const commandSyntaxPrefix = `-body`;

    for (let i = 0; i < commandSyntaxPrefix.length; ++i) {
        console.log(commandSyntaxPrefix[i], body[i])
        if (commandSyntaxPrefix[i] !== body[i])
            throw new Error("Invalid body command")
    }
};

const validateArgumentNumber = (actualArguments, inputArguments) => {
    if (actualArguments !== inputArguments) {
        throw new Error("Number of arguments is not inline with command")
    }
    else {
        console.log(chalk.green.inverse("sucess"))
    }
};

module.exports = {
    validateProgramArguments,
    validateTitle,
    validateBody,
    validateArgumentNumber
};