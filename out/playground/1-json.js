"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var changeData = function (obj) {
    var copy = __assign({}, obj);
    copy.name = 'Changed name';
    copy.sex = 'Changed sex(no)';
    return copy;
};
var dataJson = fs_1.default.readFileSync('1-json.json').toString();
var data = JSON.parse(dataJson);
fs_1.default.writeFileSync('1-json.json', JSON.stringify(changeData(data)));
//# sourceMappingURL=1-json.js.map