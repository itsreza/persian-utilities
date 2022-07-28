"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAgo = exports.convertDigitsEnToFa = exports.convertDigitsFaToEn = exports.persianCardValidation = void 0;
var creditCardValidation_1 = __importDefault(require("./modules/creditCardValidation"));
exports.persianCardValidation = creditCardValidation_1.default;
var index_1 = require("./shared/utils/digitConverter/index");
Object.defineProperty(exports, "convertDigitsFaToEn", { enumerable: true, get: function () { return index_1.convertDigitsFaToEn; } });
Object.defineProperty(exports, "convertDigitsEnToFa", { enumerable: true, get: function () { return index_1.convertDigitsEnToFa; } });
var timeAgo_1 = require("./modules/timeAgo");
Object.defineProperty(exports, "timeAgo", { enumerable: true, get: function () { return timeAgo_1.timeAgo; } });
