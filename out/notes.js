"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
var Notes = /** @class */ (function () {
    function Notes() {
        var _this = this;
        this.getNotes = function () {
            console.log('Your notes');
        };
        this.addNote = function (title, body) {
            debugger;
            console.log(chalk_1.default.red(title, body));
            var notes = _this.loadNotes();
            if (notes.some(function (el) {
                return el.title === title;
            })) {
                console.log(chalk_1.default.blue('This title is already exist!'));
            }
            else {
                notes.push({
                    title: title,
                    body: body,
                });
                console.log(chalk_1.default.blue('Note is added!'));
            }
            _this.saveNotes(notes);
        };
        this.saveNotes = function (notes) {
            var dataJson = JSON.stringify(notes);
            fs_1.default.writeFileSync('notes.json', dataJson);
        };
        this.loadNotes = function () {
            try {
                var dataBuffer = fs_1.default.readFileSync('notes.json');
                console.log(chalk_1.default.yellow('Its data buffer', dataBuffer));
                var dataJson = dataBuffer.toString();
                console.log(chalk_1.default.yellow('Its data json', dataJson));
                return JSON.parse(dataJson);
            }
            catch (error) {
                return [];
            }
        };
        this.showNotes = function () {
            console.log(chalk_1.default.yellow('Its your notes'));
            var notes = _this.loadNotes();
            notes.forEach(function (note) { return console.log(chalk_1.default.green(note.title)); });
        };
        this.read = function (noteTitle) {
            var notes = _this.loadNotes();
            var findedNote = notes.find(function (note) { return note.title === noteTitle; });
            if (findedNote) {
                console.log(chalk_1.default.green.bold('The header is ', findedNote.title));
                console.log(chalk_1.default.yellowBright.bold('Body is ', findedNote.body));
            }
            else {
                console.log(chalk_1.default.red.bold('There is no this note in notes!'));
            }
        };
    }
    Notes.prototype.deleteNote = function (title) {
        var notes = this.loadNotes();
        console.log('in delete Node');
        if (notes.some(function (el) {
            return el.title === title;
        })) {
            var noteAfterFilter = notes.filter(function (el) {
                return el.title !== title;
            });
            this.saveNotes(noteAfterFilter);
            console.log(chalk_1.default.green('Note is successfuly deleted'));
        }
        else {
            console.log(chalk_1.default.red('There is no this note'));
        }
    };
    return Notes;
}());
exports.notes = new Notes();
//# sourceMappingURL=notes.js.map