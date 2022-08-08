import { convertDigitsFaToEn } from '../../shared/utils/digitConverter';
import type {InterfaceAbbreviatedNumberlLookup} from "../../types/abb"
import { abbreviatedNumberlLookup, numberRegex } from '../../shared/constants/digits/index.constants';

/**
 * function helper can abbreviate a number.
 * example : 13000000 => "13M"
 * @category numerical
 * @param bigNumber English entry number. ex: 101000
 * @param toFixed Number of digits after the decimal point. Must be in the range 0 - 20, inclusive
 * @returns Value with String Type. ex: "101K"
 */
const abbNumber = (bigNumber: number, toFixed= 0): string => {
    if (!bigNumber || typeof bigNumber !== 'number') throw TypeError('Entry Argument Should be Valid With Number Type For `abbreviatedNumber` Method');
    const entryNumber = Number(convertDigitsFaToEn(String(bigNumber)));
    const item = abbreviatedNumberlLookup
        .slice()
        .reverse()
        .find((item: InterfaceAbbreviatedNumberlLookup) => {
            return entryNumber >= item.value;
        });
    return item ? (bigNumber / item.value).toFixed(toFixed).replace(numberRegex, '$1') + item.symbol : '0';
};

export default abbNumber;
