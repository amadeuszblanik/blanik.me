const TIME_IN_DAYS = 8.64e7;
const DAYS_IN_YEAR = 365.25;
const MONTHS_IN_YEAR = 12;

const util = (dateA: Date, dateB: Date) => {
  const content = [];
  const days = Math.ceil((dateA.getTime() - dateB.getTime()) / TIME_IN_DAYS);

  const years = days / DAYS_IN_YEAR;
  const yearsToDisplay = Math.floor(years);

  if (yearsToDisplay > 0) {
    content.push(yearsToDisplay > 1 ? `${yearsToDisplay} years` : `${yearsToDisplay} year`);
  }

  const months = (years - Math.floor(years)) * MONTHS_IN_YEAR;
  const monthsToDisplay = Math.floor(months);

  if (monthsToDisplay > 0) {
    content.push(monthsToDisplay > 1 ? `${monthsToDisplay} months` : `${monthsToDisplay} month`);
  }

  return content.join(" ");
};

export default util;
