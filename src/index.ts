import persianCardValidation from './modules/creditCardValidation';
import { convertDigitsFaToEn, convertDigitsEnToFa } from './shared/utils/digitConverter/index';
import { timeAgo } from './modules/timeAgo';

console.log(persianCardValidation("6219861054507081"))

export { persianCardValidation, convertDigitsFaToEn, convertDigitsEnToFa, timeAgo };
