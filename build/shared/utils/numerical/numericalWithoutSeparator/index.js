"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * function helper can remove any separator passing
 * example : 13,000 => 13000
 * @category numerical
 * @param numberWithSeparator Number With Any Separator as String ex. "14,000,300"
 * @param separator by default we have thousand Separator ","
 * @returns Value with String or Number Type ex. 13m000 13,000
 */
var numericalWithoutSeparator = function (numberWithSeparator, separator) {
    if (separator === void 0) { separator = ","; }
    if (numberWithSeparator) {
        var splittedNumbers = numberWithSeparator === null || numberWithSeparator === void 0 ? void 0 : numberWithSeparator.split(separator);
        var pureNumber = splittedNumbers.join("");
        return isNaN(Number(pureNumber)) ? pureNumber : Number(pureNumber);
    }
    return numberWithSeparator;
};
exports.default = numericalWithoutSeparator;
