// import { hasPersian } from "../isPersian";
// import { digitsFaToEn } from "../digits";
// import verifyCardNumber from "../verifyCardNumber";
// import { acceptableKeywords, cardNumberRegex } from "./utils";
// import getBankNameFromCardNumber from "../getBankNameFromCardNumber";

import { convertDigitsFaToEn } from '../../shared/utils/digitConverter';
import bankCreditCards from '../../shared/constants/‌bankCreditCards/index.constants';
interface InterfaceExtractCardDetail {
    image?: string;
    isValid?: boolean;
    bankName?: string | null;
    message?: string;
}

interface InterfaceExtractCardNumberOptions {
    checkValidation: boolean;
    detectBankNumber: boolean;
}

const defaultExtractCardNumberOptions = {
    checkValidation: true,
    detectBankNumber: true
};

const creditCardValidation = (cardNumber: string): boolean => {
    return cardNumber.length === 16;
};

/**
 * Extract Iranian Bank's numbers into a string
 * @param cardNumber String Card Number With Simple Format
 * @param options Validation Checking for Card And Another Data About CreditCard
 * @returns {Object} details of Credit Card
 */
export default function(
    cardNumber: string,
    options: InterfaceExtractCardNumberOptions = defaultExtractCardNumberOptions
): InterfaceExtractCardDetail {
    let bankName = '';
    if (typeof cardNumber !== 'string') throw new Error('CardNumber Argument Should be String');
    const creditCardNumber = convertDigitsFaToEn(cardNumber);
    const isValidCreditCard = creditCardValidation(creditCardNumber);
    if (!isValidCreditCard) {
        return { message: 'شماره کارت فاقد اعتبار است', isValid: false };
    }

    if (options?.detectBankNumber && cardNumber.length > 6) {
        const entryIdentifier = cardNumber.substring(0, 6);
        const bankDetail = bankCreditCards.find(({ creditIdentifier }) => String(creditIdentifier) === entryIdentifier);
        bankName = bankDetail?.name ?? '';
    }

    return {
        isValid: bankName ? isValidCreditCard : false,
        bankName
    };
}
