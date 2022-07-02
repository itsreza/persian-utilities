import { persianNumbersArray, persianDigitsRegex } from '../../constants/digits/index.constants';

/**
 * @category Utils
 * @description Function Convert English Number Into Persian Number
 * @param number English entry number
 * @returns String Number is Equal With English
 */
const convertDigitsFaToEn = (number: string): string | any => {
    if (!number || typeof number === 'number') throw TypeError('Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method');
    const convertedToEnglish = number.replace(persianDigitsRegex, (number: string): string => String(persianNumbersArray.indexOf(number)));
    return convertedToEnglish;
};
export { convertDigitsFaToEn };
