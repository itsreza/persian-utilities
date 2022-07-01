import { persianNumbersArray , persianDigitsRegex  } from "../constants/digits/index.constants";
// Types
// import type { DigitsConverter } from "../digits.types";

/**
 * digitsFaToEn
 *
 * @category Digits
 * @description Takes a string and
 * returns a string that represents the same value but
 * its farsi digits are replaced with english digits
 */
// const digitsFaToEn: DigitsConverter = (value) => {
// 	if (typeof value !== "string") throw TypeError("PersianTools: digitsFaToEn - The input must be string");

// 	return String(value).replace(faDigitsRegex, (char) => `${faNums.indexOf(char)}`);
// };

// /**
//  * digitsFaToAr
//  *
//  * @category Digits
//  * @description Takes a string and
//  * returns a string that represents the same value but
//  * its farsi digits are replaced with arabic digits
//  */
// const digitsFaToAr: DigitsConverter = (value) => {
// 	if (typeof value !== "string") throw TypeError("PersianTools: digitsFaToAr - The input must be string");

// 	return String(value).replace(faDigitsRegex, (char) => arNums[faNums.indexOf(char)]);
// };

// export { digitsFaToEn, digitsFaToAr };
/**
 * @category Utils
 * @description Function Convert English Number Into Persian Number 
 * @param number English entry number
 * @returns Persian Number is Equal With English 
 */
const convertDigitsFaToEn = (number : String) : Number => {
	if(!number || typeof number === "number") throw TypeError("Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method");
	const convertedToEnglish = number.replace(persianDigitsRegex , (number : string) : string=> String(persianNumbersArray.indexOf(number)));
	return Number(convertedToEnglish);
}
export {convertDigitsFaToEn};