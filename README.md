# persian-utilities

![alt text](typo.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Persian Modules need to Improved Application.</br>
Collections of Persian Utils And Helpers Function.

## Collections

-   [**convertDigitsFaToEn**](#convertdigitsfatoen)
-   [**convertDigitsEnToFa**](#convertdigitsentofa)
-   [**persianCardValidation**](#persiancardvalidation)
-   [**timeAgo**](#timeago)
-   [**isNationalID**](#isnationalid)
-   [**numericalSeparator**](#numericalseparator)
-   [**numericalWithoutSeparator**](#numericalwithoutseparator)
-   [**wordifyNumbers**](#wordifynumbers)

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
convertDigitsFaToEn('۱۲۳۴'); // result : 1234
```

### convertDigitsEnToFa

```javascript
import { convertDigitsEnToFa } from 'persian-utilities';
convertDigitsFaToEn('1234'); // result : ۱۲۳۴
```

### persianCardValidation

```javascript
import { persianCardValidation } from 'persian-utilities';
persianCardValidation('6219861054512345'); // result : {bankName : "بانک سامان" , isValid : true}
```

### timeAgo

second argument set Exact option

```javascript
import { timeAgo } from 'persian-utilities';
// not exact mode
timeAgo('۱۴۰۱/۰۵/۰۹ ۱۰:۰۰'); // result : روز قبل 1
// exact mode
timeAgo('۱۴۰۱/۰۵/۰۹ ۱۰:۰۰', true); // result : ثانیه29 و ساعت2 و روز1
```

### isNationalID

```javascript
import { isNationalID } from 'persian-utilities';
isNationalID('1111111111'); // result : true
```

### numericalSeparator

```javascript
import { numericalSeparator } from 'persian-utilities';
numericalSeparator(entryNumber, separateLength?: number, separator?: string)
```

```javascript
import { numericalSeparator } from 'persian-utilities';
// without Passing Any Option
numericalSeparator(100000); // result : 100,000
// with Customized options
numericalSeparator('10000', 2, '.'); // result : 1.00.00
```

#### numericalSeparator Arguments

| index | argument                  | type             | default value |
| ----- | ------------------------- | ---------------- | ------------- |
| 1     | entryNumber               | string or number | -             |
| 2     | separateLength (optional) | number           | 3             |
| 3     | separator (optional)      | string           | ","           |

### numericalWithoutSeparator

```javascript
import { numericalWithoutSeparator } from 'persian-utilities';
numericalWithoutSeparator(numberWithSeparator: string, separator?: string)
```

```javascript
import { numericalWithoutSeparator } from 'persian-utilities';
// without Passing Any Option
numericalWithoutSeparator(100000); // result : 100,000
// with Customized options
numericalWithoutSeparator(1.00.00 , "."); // result : 10000
```

### wordifynumbers

We Supported Entry Number Less Than 1 Trillion

```javascript
import { wordifynumbers } from 'persian-utilities';
wordifynumbers(5620); // result : پنج هزار و ششصد و بیست
wordifyNumbers(153000); // result : یکصد و پنجاه و سه هزار
wordifyNumbers('۵۲۴۴۲۴۴۳۶۰۰'); // result : پنجاه و دو میلیارد و چهارصد و چهل و دو میلیون و چهارصد و چهل و سه هزار و ششصد
```
