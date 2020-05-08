import { BasicLog } from './basic';
import chalk from 'chalk';

class ErrorLog extends BasicLog {
  constructor(message: string) {
    super(message);
  }
  log: () => void = () => {
    console.log(chalk.cyan.bold(new Error(`${this.message}`).stack));
  };
}

export const getErorrMessage: GetErrorMessageFunc = (text: string) => {
  return new ErrorLog(text).log();
};

interface GetErrorMessageFunc {
  (message: string): void;
}
