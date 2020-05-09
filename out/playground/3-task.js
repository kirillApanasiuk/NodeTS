"use strict";
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var tasks = {
    tasks: [
        {
            text: 'Grocery shopping',
            completed: true,
        },
        {
            text: 'Clean yard',
            completed: false,
        },
        {
            text: 'Film course',
            completed: false,
        },
    ],
    getTasksToDo: function () {
        this.tasks
            .filter(function (task) { return !task.completed; })
            .forEach(function (filteredTask) {
            console.log(chalk_1.default.green(JSON.stringify(filteredTask)));
        });
    },
};
console.log(tasks.getTasksToDo());
//# sourceMappingURL=3-task.js.map