"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDigitsEnToFa = void 0;
var index_constants_1 = require("../../constants/digits/index.constants");
/**
 * @category Utils
 * @description Function Convert Persian Number Into English Number
 * @param number Persian entry number
 * @returns Persian Number is Equal With English
 */
var convertDigitsEnToFa = function (number) {
    if (!number || typeof number !== 'string')
        throw TypeError('Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method');
    var convertedToPersian = number.replace(index_constants_1.englishDigitsRegex, function (number) {
        var indexed = index_constants_1.englishNumbersArray.indexOf(number);
        return String(index_constants_1.persianNumbersArray[indexed]);
    });
    return convertedToPersian;
};
exports.convertDigitsEnToFa = convertDigitsEnToFa;
