import fs from 'fs';

import chalk, { bold } from 'chalk';

class Notes {
  readonly getNotes: GetNotesFunc = () => {
    console.log('Your notes');
  };

  addNote = (title: string, body: string) => {
    debugger;
    console.log(chalk.red(title, body));
    const notes = this.loadNotes();
    if (
      notes.some((el) => {
        return el.title === title;
      })
    ) {
      console.log(chalk.blue('This title is already exist!'));
    } else {
      notes.push({
        title: title,
        body: body,
      });
      console.log(chalk.blue('Note is added!'));
    }
    this.saveNotes(notes);
  };

  deleteNote(title: string) {
    const notes: INotes[] = this.loadNotes();
    console.log('in delete Node');
    if (
      notes.some((el) => {
        return el.title === title;
      })
    ) {
      const noteAfterFilter = notes.filter((el) => {
        return el.title !== title;
      });

      this.saveNotes(noteAfterFilter);
      console.log(chalk.green('Note is successfuly deleted'));
    } else {
      console.log(chalk.red('There is no this note'));
    }
  }

  saveNotes = (notes: INotes[]) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
  };

  loadNotes: () => INotes[] = () => {
    try {
      const dataBuffer = fs.readFileSync('notes.json');
      console.log(chalk.yellow('Its data buffer', dataBuffer));
      const dataJson = dataBuffer.toString();
      console.log(chalk.yellow('Its data json', dataJson));
      return JSON.parse(dataJson);
    } catch (error) {
      return [];
    }
  };

  showNotes: () => void = () => {
    console.log(chalk.yellow('Its your notes'));
    const notes = this.loadNotes();
    notes.forEach((note) => console.log(chalk.green(note.title)));
  };

  read: (arg: string) => void = (noteTitle: string) => {
    const notes = this.loadNotes();
    const findedNote = notes.find((note) => note.title === noteTitle);
    if (findedNote) {
      console.log(chalk.green.bold('The header is ', findedNote.title));
      console.log(chalk.yellowBright.bold('Body is ', findedNote.body));
    } else {
      console.log(chalk.red.bold('There is no this note in notes!'));
    }
  };
}

export const notes = new Notes();

interface GetNotesFunc {
  (): void;
}

interface INotes {
  title: string;
  body: string;
}
