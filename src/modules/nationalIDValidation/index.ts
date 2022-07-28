import { convertDigitsFaToEn } from "../../shared/utils/digitConverter";
const nationalIDValidation = (nationalID: string): boolean => { 
    if (nationalID) {
        if (nationalID?.length > 10) {
            return false;
        }
        const englishNationalID = convertDigitsFaToEn(nationalID);
        const last = parseInt(englishNationalID[9], 10);
        const num =
            [0, 1, 2, 3, 4, 5, 6, 7, 8]
                .map(function (n) {
                    return parseInt(englishNationalID[n], 10) * (10 - n);
                })
                .reduce(function (code, n) {
                    return code + n;
                }) % 11;
        return (num < 2 && last === num) || (num >= 2 && last + num === 11);
    }
    return true;
};

export default nationalIDValidation;