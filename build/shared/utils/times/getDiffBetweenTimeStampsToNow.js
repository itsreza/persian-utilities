"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var digitConverter_1 = require("../digitConverter");
var convertDateAndTimeToTimeStamp_1 = __importDefault(require("./convertDateAndTimeToTimeStamp"));
var getCurrentPersianTime_1 = __importDefault(require("./getCurrentPersianTime"));
var getDiffBetweenTimeStampsToNow = function (oldTimeStamp) {
    var now = convertDateAndTimeToTimeStamp_1.default(digitConverter_1.convertDigitsFaToEn(getCurrentPersianTime_1.default()));
    var secondDiff = (now - oldTimeStamp) / 1000;
    if (secondDiff < 0) {
        throw new Error('Your Time is Wrong It Seems for Feature you should Pass Time Before Now..!');
    }
    var daysDifference = Math.floor(secondDiff / 60 / 60 / 24);
    secondDiff -= daysDifference * 60 * 60 * 24;
    var hoursDifference = Math.floor(secondDiff / 60 / 60);
    secondDiff -= hoursDifference * 60 * 60;
    var minutesDifference = Math.floor(secondDiff / 60);
    secondDiff -= minutesDifference * 60;
    var secondsDifference = Math.floor(secondDiff);
    return {
        days: daysDifference,
        hours: hoursDifference,
        minutes: minutesDifference,
        seconds: secondsDifference
    };
};
exports.default = getDiffBetweenTimeStampsToNow;
