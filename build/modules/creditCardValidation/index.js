"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var digitConverter_1 = require("../../shared/utils/digitConverter");
var index_constants_1 = __importDefault(require("../../shared/constants/\u200CbankCreditCards/index.constants"));
var defaultExtractCardNumberOptions = {
    checkValidation: true,
    detectBankNumber: true
};
var creditCardValidation = function (cardNumber) {
    return cardNumber.length === 16;
};
/**
 * Extract Iranian Bank's numbers into a string
 * @param cardNumber String Card Number With Simple Format
 * @param options Validation Checking for Card And Another Data About CreditCard
 * @returns {Object} details of Credit Card
 */
function default_1(cardNumber, options) {
    var _a;
    if (options === void 0) { options = defaultExtractCardNumberOptions; }
    var bankName = '';
    if (typeof cardNumber !== 'string')
        throw new Error('CardNumber Argument Should be String');
    var creditCardNumber = digitConverter_1.convertDigitsFaToEn(cardNumber);
    var isValidCreditCard = creditCardValidation(creditCardNumber);
    if (!isValidCreditCard) {
        return { message: 'شماره کارت فاقد اعتبار است', isValid: false };
    }
    if ((options === null || options === void 0 ? void 0 : options.detectBankNumber) && cardNumber.length > 6) {
        var entryIdentifier_1 = cardNumber.substring(0, 6);
        var bankDetail = index_constants_1.default.find(function (_a) {
            var creditIdentifier = _a.creditIdentifier;
            return String(creditIdentifier) === entryIdentifier_1;
        });
        bankName = (_a = bankDetail === null || bankDetail === void 0 ? void 0 : bankDetail.name) !== null && _a !== void 0 ? _a : '';
    }
    return {
        isValid: bankName ? isValidCreditCard : false,
        bankName: bankName
    };
}
exports.default = default_1;
