"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var notes_1 = require("./notes");
// const customClass = new ActionEngineClass(process.argv[2] as AdminAction);
// customClass.doAction();
//Create add command
yargs_1.default.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        notes_1.notes.addNote(argv.title, argv.body);
    },
});
yargs_1.default.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: 'true',
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: false,
            type: 'string',
        },
    },
    handler: function (argv) {
        notes_1.notes.deleteNote(argv.title);
    },
});
yargs_1.default.command({
    command: 'list',
    describe: 'Show list of command',
    handler: function () {
        notes_1.notes.showNotes();
    },
});
yargs_1.default.command({
    command: 'read',
    describe: 'Read command',
    builder: {
        title: {
            describe: 'Title of read command',
            demandOption: 'true',
            type: 'string',
        },
    },
    handler: function (argv) {
        notes_1.notes.read(argv.title);
    },
});
yargs_1.default.version('1.0.1');
yargs_1.default.parse();
//# sourceMappingURL=app.js.map