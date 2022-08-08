"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegex = exports.arabicDigitsRegex = exports.persianDigitsRegex = exports.englishDigitsRegex = exports.abbreviatedNumberlLookup = exports.arabicNumbersArray = exports.persianNumbersArray = exports.englishNumbersArray = void 0;
// Digits Array Include English, Farsi, Arabic
exports.englishNumbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
exports.persianNumbersArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
exports.arabicNumbersArray = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
//abbreviated Number lookup array
exports.abbreviatedNumberlLookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
];
// Regex of English,Farsi,Arabic Numbers
exports.englishDigitsRegex = /[0-9]/g;
exports.persianDigitsRegex = /[۰۱۲۳۴۵۶۷۸۹]/g;
exports.arabicDigitsRegex = /[٠١٢٣٤٥٦٧٨٩]/g;
// Regex for abbreviate Numbers
exports.numberRegex = /\.0+$|(\.[0-9]*[1-9])0+$/;
