import { BasicLog } from './basic';
import chalk from 'chalk';

export class WarningLog extends BasicLog {
  constructor(message: string) {
    super(message);
  }
  log: () => void = () => {
    console.log(chalk.red(`${this.message}`));
  };
}
