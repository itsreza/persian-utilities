// import { digitsEnToFa, digitsFaToEn, digitsFaToAr, digitsArToFa, digitsArToEn, digitsEnToAr } from "../src";
import { convertDigitsFaToEn } from "../../../../shared/utils/digitConverter/index"
describe("Digits converter Fa To En", () => {
   

	test("Convert Simple Numbers from Persian to English", () => {
        const englishNumber = "0123456789"
        const persianNumber = "۰۱۲۳۴۵۶۷۸۹"
		const result = convertDigitsFaToEn(persianNumber)
		expect(result).toBe(englishNumber)
	});

	test("test should be Convert Several Simple Number From Persian to English", () => {
		expect(convertDigitsFaToEn("۶۶۶")).toEqual("666");
		expect(convertDigitsFaToEn("۰۱۲۳")).toEqual("0123");
		expect(convertDigitsFaToEn("۳۵۲۳")).toEqual("3523");
		expect(convertDigitsFaToEn("۶۳۰۳")).toEqual("6303");
	});
	
	
	test("test should be passed Mixed Number Persian And English ", () => {
		expect(convertDigitsFaToEn("۲۴23۵۶34")).toEqual("24235634");
		expect(convertDigitsFaToEn("۱۲۳۴۵۶۷۸۹۱")).toEqual("1234567891");
		expect(convertDigitsFaToEn("۰")).toEqual("0");
		expect(convertDigitsFaToEn("۰۰۱۱")).toEqual("0011");
	});

	test("test should be Raised Error When You Passing Wrong Argument Type", () => {
		const correctErrorMessage = 'Entry Argument Should be Valid With String Type For `convertDigitsFaToEn` Method'
		const invalidArgumentType = "1";
		try{
			convertDigitsFaToEn(invalidArgumentType)
		} catch (error){
			expect(error.message).toBe(correctErrorMessage)
		}
	});
});
