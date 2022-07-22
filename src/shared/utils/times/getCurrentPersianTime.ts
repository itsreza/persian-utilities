/**
 * @category Time
 * Get Persian Time Function
 * @returns Current PersianLocal Time With Format YYYY/MM/DD HH:mm:SS
 */
const getCurrentPersianTime = (): string => {
    const dateFormat: object = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const now = Date.now();
    return new Date(now).toLocaleString('fa-IR', dateFormat).replace(/‏|،/g, '');
};

export default getCurrentPersianTime;
