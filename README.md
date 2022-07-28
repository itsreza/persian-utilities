# persian-utilities

Persian Modules need to Improved Application.</br>
Collections of Persian Utils And Helpers Function.

## Collections

-   **persian Card Validation With Banks**
-   **convertDigitsFaToEn**
-   **convertDigitsEnToFa**

## Install

### NPM

```
npm install persian-utilities
```

## Usage

Import `persian-utilities` into your app's modules or import ES modules With Name

## Apis

### convertDigitsFaToEn

```javascript
import { convertDigitsFaToEn } from 'persian-utilities';
convertDigitsFaToEn('۱۲۳۴'); // result 1234
```

### convertDigitsEnToFa

```javascript
import { convertDigitsEnToFa } from 'persian-utilities';
convertDigitsFaToEn('1234'); // result ۱۲۳۴
```

### persianCardValidation

```javascript
import { persianCardValidation } from 'persian-utilities';
persianCardValidation('6219861054512345'); // result {bankName : "بانک سامان"}
```
