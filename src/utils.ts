import { getErorrMessage } from './helpers/logs/errors';

export type AdminAction = 'CREATE' | 'ACTIVATE';

export class ActionEngineClass {
  action: AdminAction;
  constructor(param: AdminAction) {
    this.action = param;
  }
  doAction() {
    switch (this.action) {
      case 'CREATE':
        console.log(this.action);
        break;
      case 'ACTIVATE':
        console.log(this.action);
        break;
      default:
        getErorrMessage('Unexpected command prompt argument');
    }
  }
}
