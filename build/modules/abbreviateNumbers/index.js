"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var digitConverter_1 = require("../../shared/utils/digitConverter");
var index_constants_1 = require("../../shared/constants/digits/index.constants");
/**
 * function helper can abbreviate a number.
 * example : 13000000 => "13M"
 * @category numerical
 * @param bigNumber English entry number. ex: 101000
 * @param toFixed Number of digits after the decimal point. Must be in the range 0 - 20, inclusive
 * @returns Value with String Type. ex: "101K"
 */
var abbNumber = function (bigNumber, toFixed) {
    if (toFixed === void 0) { toFixed = 0; }
    if (!bigNumber || typeof bigNumber !== 'number')
        throw TypeError('Entry Argument Should be Valid With Number Type For `abbreviatedNumber` Method');
    var entryNumber = Number(digitConverter_1.convertDigitsFaToEn(String(bigNumber)));
    var item = index_constants_1.abbreviatedNumberlLookup
        .slice()
        .reverse()
        .find(function (item) {
        return entryNumber >= item.value;
    });
    return item ? (bigNumber / item.value).toFixed(toFixed).replace(index_constants_1.numberRegex, '$1') + item.symbol : '0';
};
exports.default = abbNumber;
