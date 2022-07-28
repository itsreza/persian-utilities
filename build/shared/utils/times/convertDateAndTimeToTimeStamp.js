"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertDateAndTimeToTimeStamp = function (date) {
    var timeStamp = Math.round(new Date(date).getTime());
    return timeStamp;
};
exports.default = convertDateAndTimeToTimeStamp;
