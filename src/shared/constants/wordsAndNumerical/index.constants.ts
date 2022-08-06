interface InterfaceWordsNumerical<T = string> {
    [key: number]: T;
}

export const UNITS_WORDS_NUMERICAL: InterfaceWordsNumerical = {
    0: 'صفر',
    1: 'یک',
    2: 'دو',
    3: 'سه',
    4: 'چهار',
    5: 'پنج',
    6: 'شش',
    7: 'هفت',
    8: 'هشت',
    9: 'نه',
    10: 'ده',
    11: 'یازده',
    12: 'دوازده',
    13: 'سیزده',
    14: 'چهارده',
    15: 'پانزده',
    16: 'شانزده',
    17: 'هفده',
    18: 'هجده',
    19: 'نوزده',
    20: 'بیست',
    30: 'سی',
    40: 'چهل',
    50: 'پنجاه',
    60: 'شصت',
    70: 'هفتاد',
    80: 'هشتاد',
    90: 'نود'
  }

export const HUNDRED_WORDS_NUMERICAL: InterfaceWordsNumerical = {
    100: "یکصد",
    200: "دویست",
    300: "سیصد",
    400: "چهارصد",
    500: "پانصد",
    600: "ششصد",
    700: "هفتصد",
    800: "هشتصد",
    900: "نهصد"
};

export const MAGNITUDE: InterfaceWordsNumerical = {
     1000 : "هزار",
     1000000 : "میلیون",
     1000000000 : "میلیارد",
     1000000000000 : "تریلیون"
};


export const HUNDRED = 100;
export const THOUSAND = 1000
export const MILLION = 1000000;
export const BILLION = 1000000000;
export const TRILLION = 1000000000000;