"use strict";
// interface InterfaceNumericalSeparatorArguments {
// number: number | string;
// separateLength?: number;
// }
// TODO - Write Correct Interface for Arguments\
Object.defineProperty(exports, "__esModule", { value: true });
var digitConverter_1 = require("../../digitConverter");
/**
 * function can add separator with options
 * example : 130000000 => 130,000,000
 * @category numerical
 * @param number Entry Number Pure
 * @param separateLength Number you want To separated
 * @param separator PreFix Separator by Default ","
 * @returns New Value Separated with Options
 */
var numericalSeparator = function (number, separateLength, separator) {
    if (separateLength === void 0) { separateLength = 3; }
    if (separator === void 0) { separator = ","; }
    var entryNumber = digitConverter_1.convertDigitsFaToEn(String(number));
    if ((entryNumber === null || entryNumber === void 0 ? void 0 : entryNumber.length) <= separateLength) {
        return entryNumber;
    }
    var splittedNumbers = entryNumber.split("").reverse();
    var result = [];
    for (var index = 0; (splittedNumbers === null || splittedNumbers === void 0 ? void 0 : splittedNumbers.length) > index; index++) {
        if (index % separateLength === 0 && index) {
            result.push(separator);
        }
        result.push(String(splittedNumbers[index]));
    }
    return result.reverse().join("");
};
exports.default = numericalSeparator;
