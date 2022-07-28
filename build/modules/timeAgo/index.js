"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAgo = void 0;
var digitConverter_1 = require("../../shared/utils/digitConverter");
var convertDateAndTimeToTimeStamp_1 = __importDefault(require("../../shared/utils/times/convertDateAndTimeToTimeStamp"));
var getDiffBetweenTimeStampsToNow_1 = __importDefault(require("../../shared/utils/times/getDiffBetweenTimeStampsToNow"));
function timeAgo(date, isExact) {
    var oldtime = convertDateAndTimeToTimeStamp_1.default(digitConverter_1.convertDigitsFaToEn(date));
    var _a = getDiffBetweenTimeStampsToNow_1.default(oldtime), days = _a.days, hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
    if (isExact) {
        var times = { روز: days, ساعت: hours, دقیقه: minutes, ثانیه: seconds };
        var separatedTime = [];
        for (var item in times) {
            if (times[item]) {
                separatedTime.push("" + item + times[item]);
            }
        }
        var exactStringTime = separatedTime === null || separatedTime === void 0 ? void 0 : separatedTime.reverse().join(' و ');
        return exactStringTime;
    }
    if (days) {
        return "\u0631\u0648\u0632 \u0642\u0628\u0644 " + days;
    }
    if (hours) {
        return hours + " \u0633\u0627\u0639\u062A \u0642\u0628\u0644";
    }
    if (minutes) {
        return minutes + " \u062F\u0642\u06CC\u0642\u0647 \u0642\u0628\u0644";
    }
    if (seconds) {
        return seconds + " \u062B\u0627\u0646\u06CC\u0647 \u0642\u0628\u0644";
    }
    if (seconds === 0) {
        return 'هم اکنون';
    }
    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}
exports.timeAgo = timeAgo;
