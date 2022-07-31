const numericalToWords = (number: number) => {
if(!number){
throw new Error("Persian-Utilities Error : Number Should be Pass to numericalToWord Method.");
}
// Number Converted
let pureNumber = number;
const result: Array<string> = [];
// if(pureNumber < 10){
//     pureNumber = number - 1;
//     result.push("yek")
// }


return pureNumber % 10
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