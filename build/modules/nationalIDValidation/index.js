"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var digitConverter_1 = require("../../shared/utils/digitConverter");
var nationalIDValidation = function (nationalID) {
    if (nationalID) {
        if ((nationalID === null || nationalID === void 0 ? void 0 : nationalID.length) > 10) {
            return false;
        }
        var englishNationalID_1 = digitConverter_1.convertDigitsFaToEn(nationalID);
        var last = parseInt(englishNationalID_1[9], 10);
        var num = [0, 1, 2, 3, 4, 5, 6, 7, 8]
            .map(function (n) {
            return parseInt(englishNationalID_1[n], 10) * (10 - n);
        })
            .reduce(function (code, n) {
            return code + n;
        }) % 11;
        return (num < 2 && last === num) || (num >= 2 && last + num === 11);
    }
    return true;
};
exports.default = nationalIDValidation;
