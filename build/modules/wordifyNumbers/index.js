"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_constants_1 = require("../../shared/constants/wordsAndNumerical/index.constants");
var digitConverter_1 = require("../../shared/utils/digitConverter");
// Final Result Converted to Words
var result = [];
/**
 * @category numerical
 * @param number Entry Number Should be Between 0 - 99
 * @returns String of Entry Number
 * ex. convertUnitNumbers(99) return نو و نه
 */
var convertUnitNumbers = function (number) {
    var result = [];
    if (!number) {
        return "";
    }
    if (index_constants_1.UNITS_WORDS_NUMERICAL === null || index_constants_1.UNITS_WORDS_NUMERICAL === void 0 ? void 0 : index_constants_1.UNITS_WORDS_NUMERICAL[number]) {
        result.push(index_constants_1.UNITS_WORDS_NUMERICAL === null || index_constants_1.UNITS_WORDS_NUMERICAL === void 0 ? void 0 : index_constants_1.UNITS_WORDS_NUMERICAL[number]);
    }
    else {
        var splittedNumber = String(number).split("");
        result.push(index_constants_1.UNITS_WORDS_NUMERICAL === null || index_constants_1.UNITS_WORDS_NUMERICAL === void 0 ? void 0 : index_constants_1.UNITS_WORDS_NUMERICAL[Number(splittedNumber[0] + 0)]);
        result.push(index_constants_1.UNITS_WORDS_NUMERICAL === null || index_constants_1.UNITS_WORDS_NUMERICAL === void 0 ? void 0 : index_constants_1.UNITS_WORDS_NUMERICAL[splittedNumber[1]]);
    }
    return result.join(" و ");
};
/**
 * @category numerical
 * @param number Entry Number Should be Between 100 - 999
 * @returns Converted Number To Wordify
 * ex. convertHundredNumbers(250) return دویست و پنجاه
 */
var convertHundredNumbers = function (number) {
    var unitNumber = number % 100;
    var hundredNumber = index_constants_1.HUNDRED_WORDS_NUMERICAL === null || index_constants_1.HUNDRED_WORDS_NUMERICAL === void 0 ? void 0 : index_constants_1.HUNDRED_WORDS_NUMERICAL[Math.floor(number - unitNumber)];
    return unitNumber ? hundredNumber + " \u0648 " + convertUnitNumbers(unitNumber) : hundredNumber;
};
var getFixedAndRemainingNumber = function (number, divisionNumber) {
    var remainingNumber = number % divisionNumber;
    var fixedNumber = Math.floor(number / divisionNumber);
    return { remainingNumber: remainingNumber, fixedNumber: fixedNumber };
};
function numericalToWords(number) {
    if (!number) {
        result.splice(0, result.length);
        throw new Error("Persian-Utilities Error : Number Should be Pass to numericalToWord Method.");
    }
    // Number Converted To English Number
    var convertedNumber = Number(digitConverter_1.convertDigitsFaToEn(number.toString()));
    if (convertedNumber < index_constants_1.HUNDRED) {
        /**
         * Convert 2 Digits Numbers (UNITS)
         * Less Than Hundreds
         */
        var convertedUnitNumberToPersianWord = convertUnitNumbers(convertedNumber);
        result.push(convertedUnitNumberToPersianWord);
    }
    else if (convertedNumber < index_constants_1.THOUSAND) {
        /**
         * Convert 3 Digits Numbers (HUNDREDS)
         * Less Than Thousands
         */
        var convertedHundredNumberToPersianWord = convertHundredNumbers(convertedNumber);
        result.push(convertedHundredNumberToPersianWord);
    }
    else if (convertedNumber < index_constants_1.MILLION) {
        /**
         * Convert 6 Digits Numbers (THOUSANDS)
         * Less Than Millions
         */
        var _a = getFixedAndRemainingNumber(convertedNumber, 1000), remainingNumber = _a.remainingNumber, fixedNumber = _a.fixedNumber;
        numericalToWords(fixedNumber);
        result.push(remainingNumber ? " هزار و " : " هزار ");
        if (remainingNumber) {
            numericalToWords(remainingNumber);
        }
    }
    else if (convertedNumber < index_constants_1.BILLION) {
        /**
         * Convert 9 Digits Numbers (MILLIONS)
         * Less Than Billions
         */
        var _b = getFixedAndRemainingNumber(convertedNumber, 1000000), remainingNumber = _b.remainingNumber, fixedNumber = _b.fixedNumber;
        numericalToWords(fixedNumber);
        result.push(remainingNumber ? " میلیون و " : " میلیون ");
        if (remainingNumber) {
            numericalToWords(remainingNumber);
        }
    }
    else if (convertedNumber < index_constants_1.TRILLION) {
        /**
         * Convert 12 Digits Numbers (Billion)
         * Less Than Trillions
         */
        var _c = getFixedAndRemainingNumber(convertedNumber, 1000000000), remainingNumber = _c.remainingNumber, fixedNumber = _c.fixedNumber;
        numericalToWords(fixedNumber);
        result.push(remainingNumber ? " میلیارد و " : " میلیارد ");
        if (remainingNumber) {
            numericalToWords(remainingNumber);
        }
    }
    else {
        // Overflow Defined Number Error Message
        throw new Error("Persian-Utilities : Your Number Has been overflowed...");
    }
    // joined All the String Result 
    var joinedNumberWordify = result.join("");
    return joinedNumberWordify;
}
var wordifyNumbers = function (number) {
    // Reset previous value
    result.splice(0, result.length);
    try {
        var str = numericalToWords(number);
        return str;
    }
    catch (error) {
        return "";
    }
};
exports.default = wordifyNumbers;
