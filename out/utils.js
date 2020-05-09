"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./helpers/logs/errors");
var ActionEngineClass = /** @class */ (function () {
    function ActionEngineClass(param) {
        this.action = param;
    }
    ActionEngineClass.prototype.doAction = function () {
        switch (this.action) {
            case 'CREATE':
                console.log(this.action);
                break;
            case 'ACTIVATE':
                console.log(this.action);
                break;
            default:
                errors_1.getErorrMessage('Unexpected command prompt argument');
        }
    };
    return ActionEngineClass;
}());
exports.ActionEngineClass = ActionEngineClass;
//# sourceMappingURL=utils.js.map