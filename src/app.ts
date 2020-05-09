import { ActionEngineClass, AdminAction } from './utils';
import yargs, { string, demandOption } from 'yargs';
import { notes } from './notes';
import chalk, { bold } from 'chalk';

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
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title as string, argv.body as string);
  },
});

yargs.command({
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
  handler: (argv) => {
    notes.deleteNote(argv.title as string);
  },
});

yargs.command({
  command: 'list',
  describe: 'Show list of command',
  handler: () => {
    notes.showNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'Read command',
  builder: {
    title: {
      describe: 'Title of read command',
      demandOption: 'true',
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.read(argv.title as string);
  },
});

yargs.version('1.0.1');

yargs.parse();
