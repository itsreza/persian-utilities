import { UNITS_WORDS_NUMERICAL , HUNDRED_WORDS_NUMERICAL  } from "../../shared/constants/wordsAndNumerical/index.constants"

const convertUnitNumbers = (pureNumber)=> {
    const result: Array<string> = [];
    if(!pureNumber){
        return ""
    }
    if(UNITS_WORDS_NUMERICAL?.[pureNumber]){
        result.push(UNITS_WORDS_NUMERICAL?.[pureNumber])
   } else {
       const splittedNumber = String(pureNumber).split("")
       result.push(UNITS_WORDS_NUMERICAL?.[Number(splittedNumber[0] + 0)])
       result.push(UNITS_WORDS_NUMERICAL?.[splittedNumber[1]])
   }
   return result.join(" و ")
}

const convertHundredNumbers = (pureNumber)=> {
    const unitNumber = pureNumber % 100;
    const hundredNumber = HUNDRED_WORDS_NUMERICAL?.[Math.floor(pureNumber - unitNumber)]
    // console.log(pureNumber, unitNumber , pureNumber - unitNumber)
    //     const hundredNumber = HUNDRED_WORDS_NUMERICAL?.[Math.floor(pureNumber - unitNumber)]
        return unitNumber ? `${hundredNumber} و ${convertUnitNumbers(unitNumber)}` : hundredNumber;
}

const convertThousandNumbers = (pureNumber)=> {
    // const unitNumber = pureNumber % 1000;
    // const thousandNumber = unitNumber / 1000
    // return !unitNumber ? `${convertHundredNumbers(thousandNumber)} هزار` : "a"
    // const hundredNumber = HUNDRED_WORDS_NUMERICAL?.[Math.floor(pureNumber - unitNumber)]
    // return unitNumber ? `${convertHundredNumbers} و ${convertUnitNumbers(unitNumber)}` : hundredNumber;
    // const hundredNumber = pureNumber % 1000;
    // return `${convertHundredNumbers(Math.floor(pureNumber / 1000))} هزار و ${convertHundredNumbers(hundredNumber)}`
}

const getFixedAndRemainingNumber = (number: number , separate): {remainingNumber: number ; fixedNumber: number}=> {
    const remainingNumber = number % separate;
    const fixedNumber = Math.floor(number / separate);
    return {remainingNumber , fixedNumber}
    // console.log(remainingNumber)
    // return numericalToWords(remainingNumber)
}

const result: Array<string> = [];
function numericalToWords(number: number) {
    
if(!number){
throw new Error("Persian-Utilities Error : Number Should be Pass to numericalToWord Method.");
}
// Number Converted
let pureNumber = number;



if(pureNumber <= 99){
    // Convert 2 Digits Numbers (UNITS)
    const convertedUnitNumberToPersianWord = convertUnitNumbers(pureNumber)
    result.push(convertedUnitNumberToPersianWord)
} else if (pureNumber <= 999){
    // Convert 3 Digits Numbers (HUNDREDS)
    const convertedHundredNumberToPersianWord = convertHundredNumbers(pureNumber)
    result.push(convertedHundredNumberToPersianWord)
} else if (pureNumber <= 999999){
    // Convert 6 Digits Numbers (THOUSANDS)
    // wordifyBigNumbers(pureNumber , "هزار")
    const {remainingNumber , fixedNumber } = getFixedAndRemainingNumber(pureNumber, 1000)
    numericalToWords(fixedNumber)
    result.push("هزار و")
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else if (pureNumber <= 999999999){
    // 1000000
    // Convert 9 Digits Numbers (MILLIONS)
    const {remainingNumber , fixedNumber } = getFixedAndRemainingNumber(pureNumber, 1000000)
    numericalToWords(fixedNumber)
    result.push("میلیون و")
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else if (pureNumber <= 999999999999){
    // Convert 12 Digits Numbers (Billion)
    const {remainingNumber , fixedNumber} = getFixedAndRemainingNumber(pureNumber , 1000000000)
    numericalToWords(fixedNumber)
    result.push("میلیارد و")
    if(remainingNumber){
        numericalToWords(remainingNumber)
    }
} else {
     throw new Error("Persian-Utilities : Your Number Has been overflowed...")
}

// if(pureNumber < 999999){
//     const unitNumber = pureNumber % 1000;
//     const hundredNumber = Math.floor((pureNumber - unitNumber) / 1000);
//     // const hundredNumber = HUNDRED_WORDS_NUMERICAL?.[]
//     // console.log({hundredNumber})
//     // console.log({unitNumber , a :  , hundredNumber})
//     console.log(convertHundredNumbers(unitNumber))
//     return convertHundredNumbers(hundredNumber)
// }

// if(pureNumber <= 999999999){
//     const unitNumber = pureNumber % 1000;
//     const a = pureNumber % 1000000;
//     const hundredNumber = Math.floor((pureNumber - unitNumber) / 1000000);
//     console.log(convertHundredNumbers(unitNumber))
//     console.log(convertHundredNumbers(a))
//     return convertHundredNumbers(hundredNumber)
// }

// console.log({result})
// function swap(json){
//     var ret = {};
//     for(var key in json){
//       ret[json[key]] = key;
//     }
//     return ret;
//   }
//  console.log( swap(UNITS_WORDS_NUMERICAL))
// if(pureNumber < 10){
//     result.push()
// }

// if(pureNumber < 10){
//     pureNumber = number - 1;
//     result.push("yek")
// }

// console.log({result})
const str = result.join("")
result.splice(0,result.length)
return str;
}

export default numericalToWords;



// if (num < 10) {
//     result += yekan[num - 1];
// } else if (num < 20) {
//     result += dah[num - 10];
// } else if (num < 100) {
//     result += dahgan[Math.floor(num / 10) - 2] + wordifyfa(num % 10, level + 1);
// } else if (num < 1000) {
//     result += sadgan[Math.floor(num / 100) - 1] + wordifyfa(num % 100, level + 1);
// } else if (num < 1000000) {
//     result += wordifyfa(Math.floor(num / 1000), level) + " هزار" + wordifyfa(num % 1000, level + 1);
// } else if (num < 1000000000) {
//     result += wordifyfa(Math.floor(num / 1000000), level) + " میلیون" + wordifyfa(num % 1000000, level + 1);
// } else if (num < 1000000000000) {
//     result += wordifyfa(Math.floor(num / 1000000000), level) + " میلیارد" + wordifyfa(num % 1000000000, level + 1);
// } else if (num < 1000000000000000) {
//     result += wordifyfa(Math.floor(num / 1000000000000), level) + " تریلیارد" + wordifyfa(num % 1000000000000, level + 1);
// }



// actual  conversion code starts here

// var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
// var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function convert_millions(num) {
//   if (num >= 1000000) {
//     return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
//   } else {
//     return convert_thousands(num);
//   }
// }

// function convert_thousands(num) {
//   if (num >= 1000) {
//     return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
//   } else {
//     return convert_hundreds(num);
//   }
// }

// function convert_hundreds(num) {
//   if (num > 99) {
//     return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
//   } else {
//     return convert_tens(num);
//   }
// }

// function convert_tens(num) {
//   if (num < 10) return ones[num];
//   else if (num >= 10 && num < 20) return teens[num - 10];
//   else {
//     return tens[Math.floor(num / 10)] + " " + ones[num % 10];
//   }
// }

// function convert(num) {
//   if (num == 0) return "zero";
//   else return convert_millions(num);
// }

// //end of conversion code

// //testing code begins here

// function main() {
//   var cases = [0, 1, 2, 7, 10, 11, 12, 13, 15, 19, 20, 21, 25, 29, 30, 35, 50, 55, 69, 70, 99, 100, 101, 119, 510, 900, 1000, 5001, 5019, 5555, 10000, 11000, 100000, 199001, 1000000, 1111111, 190000009];
//   for (var i = 0; i < cases.length; i++) {
//     console.log(cases[i] + ": " + convert(cases[i]));
//   }
// }

// main();


