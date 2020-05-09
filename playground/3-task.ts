//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

import chalk from 'chalk';

const tasks: ITasks = {
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
  getTasksToDo() {
    this.tasks
      .filter((task) => !task.completed)
      .forEach((filteredTask) => {
        console.log(chalk.green(JSON.stringify(filteredTask)));
      });
  },
};

interface ITasks {
  tasks: { text: string; completed: boolean }[];
  getTasksToDo: () => void;
}

console.log(tasks.getTasksToDo());
