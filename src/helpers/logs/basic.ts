export abstract class BasicLog {
  message: never | string;
  constructor(theMessage: never | string) {
    this.message = theMessage;
  }
  abstract log: () => void;
}
