import type {InterfaceAbbreviatedNumberlLookup} from "./../../../types/abb"

// Digits Array Include English, Farsi, Arabic
export const englishNumbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const persianNumbersArray = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
export const arabicNumbersArray = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

//abbreviated Number lookup array
export const abbreviatedNumberlLookup: Array<InterfaceAbbreviatedNumberlLookup> = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];

// Regex of English,Farsi,Arabic Numbers
export const englishDigitsRegex = /[0-9]/g;
export const persianDigitsRegex = /[۰۱۲۳۴۵۶۷۸۹]/g;
export const arabicDigitsRegex = /[٠١٢٣٤٥٦٧٨٩]/g;

// Regex for abbreviate Numbers
export const numberRegex = /\.0+$|(\.[0-9]*[1-9])0+$/;