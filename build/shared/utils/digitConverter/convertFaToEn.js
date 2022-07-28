"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDigitsFaToEn = void 0;
var index_constants_1 = require("../../constants/digits/index.constants");
/**
 * @category Utils
 * @description Function Convert English Number Into Persian Number
 * @param number English entry number
 * @returns String Number is Equal With English
 */
var convertDigitsFaToEn = function (number) {
    if (!number || typeof number === 'number')
        throw TypeError('Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method');
    var convertedToEnglish = number.replace(index_constants_1.persianDigitsRegex, function (number) { return String(index_constants_1.persianNumbersArray.indexOf(number)); });
    return convertedToEnglish;
};
exports.convertDigitsFaToEn = convertDigitsFaToEn;
