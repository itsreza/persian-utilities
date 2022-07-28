import persianCardValidation from './modules/creditCardValidation';
import { convertDigitsFaToEn, convertDigitsEnToFa } from './shared/utils/digitConverter/index';
import { timeAgo } from './modules/timeAgo';
import { default as isNationalID } from './modules/nationalIDValidation';

export { persianCardValidation, convertDigitsFaToEn, convertDigitsEnToFa, timeAgo, isNationalID };
