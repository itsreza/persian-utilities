import nationalIDValidation from '../../../src/modules/nationalIDValidation';
describe('National ID Validation Tests', () => {
    test('it should be return false when National ID is not Valid', () => {
        expect(nationalIDValidation('123')).toBe(false);
    });

    test('it should be return true when National ID is Valid', () => {
        expect(nationalIDValidation('1111111111')).toBe(true);
    });

    test('it should be return true if you passing empty string', () => {
        expect(nationalIDValidation('')).toBe(true);
    });
});
