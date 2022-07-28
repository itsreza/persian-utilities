"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @category Time
 * Get Persian Time Function
 * @returns Current PersianLocal Time With Format YYYY/MM/DD HH:mm:SS
 */
var getCurrentPersianTime = function () {
    var dateFormat = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    var now = Date.now();
    return new Date(now).toLocaleString('fa-IR', dateFormat).replace(/‏|،/g, '');
};
exports.default = getCurrentPersianTime;
