"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require("./basic");
var chalk_1 = __importDefault(require("chalk"));
var WarningLog = /** @class */ (function (_super) {
    __extends(WarningLog, _super);
    function WarningLog(message) {
        var _this = _super.call(this, message) || this;
        _this.log = function () {
            console.log(chalk_1.default.red("" + _this.message));
        };
        return _this;
    }
    return WarningLog;
}(basic_1.BasicLog));
exports.WarningLog = WarningLog;
//# sourceMappingURL=warnings.js.map