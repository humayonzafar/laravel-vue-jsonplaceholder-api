/*0%6(Sunday) and 6%6 (Saturday) both have a 0*/
export const isDateWeekend = (date = new Date()) => date.getDay() % 6 === 0;
