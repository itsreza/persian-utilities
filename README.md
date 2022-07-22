# persian-utils

Persian Modules need to Improved Application.</br>
Collections of Persian Utils And Helpers Function.

## Collections

-   **persian Card Validation With Banks**
-   **convertDigitsFaToEn**
-   **convertDigitsEnToFa**

## Install

Clone Project From Github.

```
git clone https://github.com/itsreza/persian-utils.git
```

> Soon Added On Npm Package Manager

## Usage

Import `Persian-Utils` into your app's modules or import ES modules With Name

## Apis

### convertDigitsFaToEn

```javascript
import { convertDigitsFaToEn } from 'persian-utils';
convertDigitsFaToEn('۱۲۳۴'); // result 1234
```

### convertDigitsEnToFa

```javascript
import { convertDigitsEnToFa } from 'persian-utils';
convertDigitsFaToEn('1234'); // result ۱۲۳۴
```

### persianCardValidation

```javascript
import { persianCardValidation } from 'persian-utils';
persianCardValidation('6219861054512345'); // result {bankName : "بانک سامان"}
```
