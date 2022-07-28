import { convertDigitsFaToEn } from '../digitConverter';
import convertDateAndTimeToTimeStamp from './convertDateAndTimeToTimeStamp';
import getCurrentPersianTime from './getCurrentPersianTime';

interface InterfaceDiffBetweenDateWithNow {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const getDiffBetweenTimeStampsToNow = (oldTimeStamp: number): InterfaceDiffBetweenDateWithNow => {
    const now = convertDateAndTimeToTimeStamp(convertDigitsFaToEn(getCurrentPersianTime()));
    let secondDiff = (now - oldTimeStamp) / 1000;
    if (secondDiff < 0) {
        throw new Error('Your Time is Wrong It Seems for Feature you should Pass Time Before Now..!');
    }
    const daysDifference = Math.floor(secondDiff / 60 / 60 / 24);
    secondDiff -= daysDifference * 60 * 60 * 24;

    const hoursDifference = Math.floor(secondDiff / 60 / 60);
    secondDiff -= hoursDifference * 60 * 60;

    const minutesDifference = Math.floor(secondDiff / 60);
    secondDiff -= minutesDifference * 60;

    const secondsDifference = Math.floor(secondDiff);

    return {
        days: daysDifference,
        hours: hoursDifference,
        minutes: minutesDifference,
        seconds: secondsDifference
    };
};

export default getDiffBetweenTimeStampsToNow;
