"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arabicDigitsRegex = exports.persianDigitsRegex = exports.englishDigitsRegex = exports.arabicNumbersArray = exports.persianNumbersArray = exports.englishNumbersArray = void 0;
// Digits Array Include English, Farsi, Arabic
exports.englishNumbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
exports.persianNumbersArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
exports.arabicNumbersArray = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
// Regex of English,Farsi,Arabic Numbers
exports.englishDigitsRegex = /[0-9]/g;
exports.persianDigitsRegex = /[۰۱۲۳۴۵۶۷۸۹]/g;
exports.arabicDigitsRegex = /[٠١٢٣٤٥٦٧٨٩]/g;
