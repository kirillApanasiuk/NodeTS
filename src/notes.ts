class Notes {
  readonly getNotes: GetNotesFunc = () => {
    console.log('Your notes');
  };
}

export const notes = new Notes();

interface GetNotesFunc {
  (): void;
}
