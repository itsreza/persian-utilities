const convertDateAndTimeToTimeStamp = (date: string): number => {
    const timeStamp = Math.round(new Date(date).getTime());
    return timeStamp;
};

export default convertDateAndTimeToTimeStamp;
