import { convertDigitsFaToEn } from '../../shared/utils/digitConverter';
import convertDateAndTimeToTimeStamp from '../../shared/utils/times/convertDateAndTimeToTimeStamp';
import getDiffBetweenTimeStampsToNow from '../../shared/utils/times/getDiffBetweenTimeStampsToNow';

export function timeAgo(date: string, isExact?: boolean): string | object {
    const olderDate = convertDateAndTimeToTimeStamp(convertDigitsFaToEn(date));
    const { days, hours, minutes, seconds } = getDiffBetweenTimeStampsToNow(olderDate);
    if (isExact) {
        const times = { روز: days, ساعت: hours, دقیقه: minutes, ثانیه: seconds };
        const separatedTime: string[] = [];
        for (const item in times) {
            if (times[item]) {
                separatedTime.push(`${item}${times[item]}`);
            }
        }
        const exactStringTime: string = separatedTime?.reverse().join(' و ');
        return exactStringTime;
    }
    if (days) {
        return `روز قبل ${days}`;
    }
    if (hours) {
        return `${hours} ساعت قبل`;
    }
    if (minutes) {
        return `${minutes} دقیقه قبل`;
    }
    if (seconds) {
        return `${seconds} ثانیه قبل`;
    }
    if (seconds === 0) {
        return 'هم اکنون';
    }
    return { days, hours, minutes, seconds };
}
