const helpFile = require("./help");
const addFile = require("./add");
const removeFile = require("./remove");
const listFile = require("./list");
const fetchFile = require("./fetch");
const validateFile = require("./validate");
const parceFile = require("./parce")
const clearFile = require("./clear")

const programInput = process.argv.slice(2);
const programOperations = ["help", "add", "remove", "list", "fetch", "clear"];

validateFile.validateProgramArguments(programInput);

const operation = process.argv[2];

switch (operation) {
    case programOperations[0]: // help funciton 
        helpFile.help(programInput);
        break;
    case programOperations[1]: // add function
        {
            const inputArguments = 2; // title & body
            const title = programInput[1];
            const body = programInput[2];
            validateFile.validateArgumentNumber(programInput.length - 1, inputArguments); // just removing the command from the array lengh
            validateFile.validateTitle(title);
            validateFile.validateBody(body);
            const parcedTitle = parceFile.parceTitle(title);
            const parcedBody = parceFile.parceBody(body);
            addFile.addNote(parcedTitle, parcedBody);

            break;
        }

    case programOperations[2]: //remove funciton
        {
            const inputArguments = 1; // title
            validateFile.validateArgumentNumber(programInput.length - 1, inputArguments);
            const title = programInput[1];
            validateFile.validateTitle(title);
            const parcedTitle = parceFile.parceTitle(title);
            removeFile.removeNote(parcedTitle)
            break;
        }

    case programOperations[3]: //list funciton
        {
            const inputArguments = 0; // No arguments
            validateFile.validateArgumentNumber(programInput.length - 1, inputArguments);
            listFile.list();
            break;
        }

    case programOperations[4]:// fetch function
        {
            const inputArguments = 1; // title
            validateFile.validateArgumentNumber(programInput.length - 1, inputArguments);
            const title = programInput[1];
            validateFile.validateTitle(title);
            const parcedTitle = parceFile.parceTitle(title);
            fetchFile.getTheNote(parcedTitle)
            break;
        }
    case programOperations[5]: //remove funciton
        {
            const inputArguments = 0; // No arguments
            validateFile.validateArgumentNumber(programInput.length - 1, inputArguments);
            clearFile.clearNotes()
            break;
        }

    default:
        throw new Error("Invalid Command. Type help to view commands !!")
}


