import abbNumber from '../../modules/abbreviateNumbers';

describe('convert long number into abbreviated string tests', () => {
    test('should be show 100 to 100', () => {
        expect(abbNumber(100)).toBe('100');
    });

    test('should be show 27000 to 27K', () => {
        const entryNumber = 27000;
        const correctResult = '27K';
        expect(abbNumber(entryNumber)).toBe(correctResult);
    });

    test('should be show 13000000 to 13M', () => {
        const entryNumber = 13000000;
        const correctResult = '13M';
        expect(abbNumber(entryNumber)).toBe(correctResult);
    });

    test('should be show 52100000 to 52.1M', () => {
        const entryNumber = 52100000;
        const correctResult = '52.1M';
        expect(abbNumber(entryNumber,1)).toBe(correctResult);
    });

    
    test('should be show 12345 to 12.34K', () => {
        const entryNumber = 12345;
        const correctResult = '12.35K';
        const abbNumer: string = abbNumber(entryNumber,2);
        expect(abbNumer).toBe(correctResult);
    });
});
