import { englishNumbersArray, englishDigitsRegex, persianNumbersArray } from '../../constants/digits/index.constants';

/**
 * @category Utils
 * @description Function Convert Persian Number Into English Number
 * @param number Persian entry number
 * @returns Persian Number is Equal With English
 */
const convertDigitsEnToFa = (number: string): string | any => {
    if (!number || typeof number !== 'string') throw TypeError('Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method');
    const convertedToPersian = number.replace(englishDigitsRegex, (number: string): string => {
        const indexed = englishNumbersArray.indexOf(number);
        return String(persianNumbersArray[indexed]);
    });
    return convertedToPersian;
};
export { convertDigitsEnToFa };
