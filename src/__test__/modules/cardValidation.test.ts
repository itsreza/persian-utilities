import CardValidation from "../../modules/creditCardValidation"


describe("Card Validation Module Test" , ()=> { 
test(" Credit Card Should have 16 Number Lower And Upper than 16 Should be Raised Error Message", ()=> { 
const notValidCardMessage=  "شماره کارت فاقد اعتبار است"
// Less Than 16
const lessCardValidationResult = CardValidation("1234")
expect(lessCardValidationResult?.isValid).toBe(false)
expect(lessCardValidationResult?.message).toBe(notValidCardMessage)
// More Than 16
const cardValidationResult = CardValidation("12345678912345367")
expect(cardValidationResult?.isValid).toBe(false)
expect(cardValidationResult?.message).toBe(notValidCardMessage)
})

test("Valid Card Count but not include Iranian Bank Pattern Credit Card Should be Raised Not Valid" , ()=> {
    const cardValidationResult = CardValidation("0000861054507081")
    expect(cardValidationResult?.isValid).toBe(false)
})

test("if Card Number Valid Should be Return Success" , ()=> {
    const cardValidationResult = CardValidation("6219861054357081");
    expect(cardValidationResult.isValid).toBe(true);
    expect(cardValidationResult.bankName).toBe("بانک سامان")
})

})