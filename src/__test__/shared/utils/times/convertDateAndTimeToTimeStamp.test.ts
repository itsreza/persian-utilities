import convertDateAndTimeToTimeStamp from '../../../../shared/utils/times/convertDateAndTimeToTimeStamp';
describe('Convert Date And Time To TimeStamp Unix', () => {
    test('should return true value of time', () => {
        const time = '2022-07-20 09:25:49';
        const timeStampResult = 1658292949;
        const convertedTime = convertDateAndTimeToTimeStamp(time) / 1000;
        expect(convertedTime).toEqual(timeStampResult);
    });
});
