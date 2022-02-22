const helpFile = require("./help");
const addFile = require("./add");
const removeFile = require("./remove");
const listFile = require("./list");
const fetchFile = require("./fetch");
const validateFile = require("./validate");

const programInput = process.argv;
const programOperations = ["help", "add", "remove", "list", "fetch"];

// validate.validateProgramInput(programInput);

const operation = process.argv[2];

switch (operation) {
    case programOperations[0]:
        helpFile.help();
        break;
    case programOperations[1]:
        console.log("adding");
        break;

    case programOperations[2]:
        console.log("removing");
        break;

    case programOperations[3]:
        console.log("listing");
        break;

    case programOperations[4]:
        console.log("fetching");
        break;
}


