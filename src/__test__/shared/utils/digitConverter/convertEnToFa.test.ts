// import { digitsEnToFa, digitsFaToEn, digitsFaToAr, digitsArToFa, digitsArToEn, digitsEnToAr } from "../src";
import { convertDigitsEnToFa } from "../../../../shared/utils/digitConverter/index"
describe("Digits converter En To Fa", () => {
   

	test("Convert Simple Numbers from English to Persian", () => {
        const englishNumber = "0123456789"
        const persianNumber = "۰۱۲۳۴۵۶۷۸۹"
		const result = convertDigitsEnToFa(englishNumber)
		expect(result).toBe(persianNumber)
	});

	test("test should be Convert Several Simple Number From English to Persian", () => {
		expect(convertDigitsEnToFa("0123")).toEqual("۰۱۲۳");
		expect(convertDigitsEnToFa("3523")).toEqual("۳۵۲۳");
		expect(convertDigitsEnToFa("6303")).toEqual("۶۳۰۳");
		expect(convertDigitsEnToFa("666")).toEqual("۶۶۶");
	});

	test("test should be passed Mixed Number English And Persian", () => {
		expect(convertDigitsEnToFa("0۰11")).toEqual("۰۰۱۱");
		expect(convertDigitsEnToFa("۲۴23۵۶34")).toEqual("۲۴۲۳۵۶۳۴");
		expect(convertDigitsEnToFa("1234567891")).toEqual("۱۲۳۴۵۶۷۸۹۱");
		expect(convertDigitsEnToFa("0")).toEqual("۰");
	});

	test("test should be Raised Error When You Passing Wrong Argument Type", () => {
		const correctErrorMessage = 'Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method'
		const invalidArgumentType = "1";
		try{
			convertDigitsEnToFa(invalidArgumentType)
		} catch (error){
			expect(error.message).toBe(correctErrorMessage)
		}
	});
});
