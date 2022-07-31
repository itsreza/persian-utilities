
// interface InterfaceNumericalSeparatorArguments {
// number: number | string;
// separateLength?: number;
// }
// TODO - Write Correct Interface for Arguments\

import { convertDigitsFaToEn } from "../../digitConverter";

/**
 * function can add separator with options
 * example : 130000000 => 130,000,000
 * @category numerical
 * @param number Entry Number Pure
 * @param separateLength Number you want To separated
 * @param separator PreFix Separator by Default ","
 * @returns New Value Separated with Options
 */
 const numericalSeparator = (number: number | string , separateLength= 3 , separator = ","): string  =>  {
    const entryNumber = convertDigitsFaToEn(String(number))
    if(entryNumber?.length <= separateLength){
        return entryNumber;
    }
    const splittedNumbers = entryNumber.split("").reverse()
    const result: Array<string> = []
    for (let index = 0; splittedNumbers?.length > index ;index++) {
        if(index % separateLength === 0 && index){
            result.push(separator)
        }
        result.push(String(splittedNumbers[index]))
    }
    return result.reverse().join("")
};

export default numericalSeparator;



