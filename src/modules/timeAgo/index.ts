// import { digitsFaToEn } from "../digits";

import { convertDigitsFaToEn } from '../../shared/utils/digitConverter';
import getCurrentPersianTime from '../../shared/utils/times/getCurrentPersianTime';

/**
 * Convert a date-time value to timestamp.
 *
 * @param {string} datetime Format must be yyyy/mm/dd hh:mm:ss.
 * @returns {number} Calculates the timestamp of the input.
 */
export function convertToTimeStamp(datetime: string): number {
    const patternDateTime = /(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/;
    const dateTime = datetime.match(patternDateTime);
    if (dateTime) {
        const date: Date = new Date(
            Number(dateTime[1]),
            parseInt(dateTime[2], 10) - 1,
            Number(dateTime[3]),
            Number(dateTime[4]),
            Number(dateTime[5]),
            Number(dateTime[6])
        );
        return date.getTime();
    } else throw new TypeError('PersianTools: convertToTimeStamp - The input format must be yyyy/mm/dd hh:mm:ss');
}

const convertDateAndTimeToTimeStamp = (date: string) => {
    const timeStamp = Math.round(new Date(date).getTime());
    return timeStamp;
};

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

const getCurrentPersianTimeDetails = (time: string): object => {
    const now = Date.now();
    const timeDetails = new Date(now).toLocaleString('fa-IR');
    console.log(timeDetails);
    return {};
};

export function timeAgo(date: string, isExact?: boolean): string | object {
    const oldtime = convertDateAndTimeToTimeStamp(convertDigitsFaToEn(date));
    const { days, hours, minutes, seconds } = getDiffBetweenTimeStampsToNow(oldtime);
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
