import persianCardValidation from './modules/creditCardValidation';
import { convertDigitsFaToEn, convertDigitsEnToFa } from './shared/utils/digitConverter/index';
import { timeAgo } from './modules/timeAgo';
import {default as isNationalID} from './modules/nationalIDValidation';

console.log(isNationalID("0018661300"))



export { persianCardValidation, convertDigitsFaToEn, convertDigitsEnToFa, timeAgo , isNationalID };
