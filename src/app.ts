import { ActionEngineClass, AdminAction } from './utils';
import yargs from 'yargs';

// const customClass = new ActionEngineClass(process.argv[2] as AdminAction);

// customClass.doAction();

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'boolean',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    console.log('Its arg \n', argv);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  handler: () => {
    console.log('Delete note');
  },
});

yargs.command({
  command: 'list',
  describe: 'Show list of command',
  handler: () => {
    console.log(`Its list command`);
  },
});

yargs.command({
  command: 'read',
  describe: 'Read command',
  handler: () => {
    console.log('Its read command');
  },
});

yargs.version('1.0.1');

yargs.parse();
