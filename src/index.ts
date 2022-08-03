import persianCardValidation from './modules/creditCardValidation';
import { convertDigitsFaToEn, convertDigitsEnToFa } from './shared/utils/digitConverter/index';
import { timeAgo } from './modules/timeAgo';
import { default as isNationalID } from './modules/nationalIDValidation';
import {default as wordifyNumbers } from "./modules/numericalToWords"
import { numericalSeparator , numericalWithoutSeparator} from "./shared/utils/numerical"




export { persianCardValidation, convertDigitsFaToEn, convertDigitsEnToFa, timeAgo, isNationalID  , numericalSeparator , numericalWithoutSeparator , wordifyNumbers };
