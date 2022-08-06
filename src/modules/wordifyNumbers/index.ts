import { UNITS_WORDS_NUMERICAL , HUNDRED_WORDS_NUMERICAL , HUNDRED ,THOUSAND ,MILLION ,BILLION , TRILLION} from "../../shared/constants/wordsAndNumerical/index.constants"
import { convertDigitsFaToEn } from "../../shared/utils/digitConverter";



// Final Result Converted to Words
const result: Array<string> = [];

interface InterfaceFixNumberAndRemainingNumber {remainingNumber: number ; fixedNumber: number}

/**
 * @category numerical
 * @param number Entry Number Should be Between 0 - 99 
 * @returns String of Entry Number 
 * ex. convertUnitNumbers(99) return نو و نه
 */
const convertUnitNumbers = (number: number): string => {
    const result: Array<string> = [];
    if(!number){
        return ""
    }
    if(UNITS_WORDS_NUMERICAL?.[number]){
        result.push(UNITS_WORDS_NUMERICAL?.[number])
   } else {
       const splittedNumber = String(number).split("")
       result.push(UNITS_WORDS_NUMERICAL?.[Number(splittedNumber[0] + 0)])
       result.push(UNITS_WORDS_NUMERICAL?.[splittedNumber[1]])
   }
   return result.join(" و ")
}

/**
 * @category numerical
 * @param number Entry Number Should be Between 100 - 999
 * @returns Converted Number To Wordify
 * ex. convertHundredNumbers(250) return دویست و پنجاه
 */
const convertHundredNumbers = (number: number): string => {
    const unitNumber = number % 100;
    const hundredNumber = HUNDRED_WORDS_NUMERICAL?.[Math.floor(number - unitNumber)]
        return unitNumber ? `${hundredNumber} و ${convertUnitNumbers(unitNumber)}` : hundredNumber;
}


const getFixedAndRemainingNumber = (number: number , divisionNumber: number): InterfaceFixNumberAndRemainingNumber => {
    const remainingNumber = number % divisionNumber;
    const fixedNumber = Math.floor(number / divisionNumber);
    return {remainingNumber , fixedNumber}
}






function numericalToWords(number: number | string): string {
if(!number){
result.splice(0 , result.length)
throw new Error("Persian-Utilities Error : Number Should be Pass to numericalToWord Method.");
}
// Number Converted To English Number
 const convertedNumber = Number(convertDigitsFaToEn(number.toString()))
if(convertedNumber < HUNDRED){
    /**
     * Convert 2 Digits Numbers (UNITS)
     * Less Than Hundreds
     */
    const convertedUnitNumberToPersianWord = convertUnitNumbers(convertedNumber)
    result.push(convertedUnitNumberToPersianWord)
} else if (convertedNumber < THOUSAND){
    /**
     * Convert 3 Digits Numbers (HUNDREDS)
     * Less Than Thousands
     */
    const convertedHundredNumberToPersianWord = convertHundredNumbers(convertedNumber)
    result.push(convertedHundredNumberToPersianWord)
} else if (convertedNumber < MILLION){
    /**
     * Convert 6 Digits Numbers (THOUSANDS)
     * Less Than Millions
     */
    const {remainingNumber , fixedNumber } = getFixedAndRemainingNumber(convertedNumber, 1000)
    numericalToWords(fixedNumber)
    result.push(remainingNumber ? " هزار و " : " هزار ")   
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else if (convertedNumber < BILLION){
    /**
     * Convert 9 Digits Numbers (MILLIONS)
     * Less Than Billions
     */
    const {remainingNumber , fixedNumber } = getFixedAndRemainingNumber(convertedNumber, 1000000)
    numericalToWords(fixedNumber)
    result.push(remainingNumber ? " میلیون و " : " میلیون ")
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else if (convertedNumber < TRILLION){
    /**
     * Convert 12 Digits Numbers (Billion)
     * Less Than Trillions
     */
    const {remainingNumber , fixedNumber} = getFixedAndRemainingNumber(convertedNumber , 1000000000)
    numericalToWords(fixedNumber)
    result.push(remainingNumber ? " میلیارد و " : " میلیارد ")
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else {
    // Overflow Defined Number Error Message
     throw new Error("Persian-Utilities : Your Number Has been overflowed...")
}
// joined All the String Result 
const joinedNumberWordify = result.join("")
return joinedNumberWordify;
}



const wordifyNumbers = (number: number | string): string => {
    // Reset previous value
    result.splice(0 , result.length)
    try {
        const str = numericalToWords(number)
        return str
    } catch (error) {
        return ""
    }  
}

export default wordifyNumbers;


