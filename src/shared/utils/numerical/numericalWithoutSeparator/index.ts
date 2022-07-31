/**
 * function helper can remove any separator passing 
 * example : 13,000 => 13000
 * @category numerical
 * @param numberWithSeparator Number With Any Separator as String ex. "14,000,300"
 * @param separator by default we have thousand Separator ","
 * @returns Value with String or Number Type ex. 13m000 13,000 
 */
const numericalWithoutSeparator = (numberWithSeparator: string ,  separator = ","): number | string => {
    if (numberWithSeparator) {
        const splittedNumbers = numberWithSeparator?.split(separator)
        const pureNumber: string | number = splittedNumbers.join("")
        return isNaN(Number(pureNumber)) ? pureNumber : Number(pureNumber);
    }
    return numberWithSeparator;
};

export default numericalWithoutSeparator;