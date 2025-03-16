const MILLISECONDS_IN_DAY = 8.64e7;
const DAYS_IN_YEAR = 365.25;
const MONTHS_IN_YEAR = 12;
const MAX_DISPLAY_YEARS = 4;
const ROUNDING_THRESHOLD_YEARS = 2;

const util = (dates: [Date, Date][]) => {
  const totalDays = dates.reduce(
    (sum, [dateA, dateB]) => sum + Math.ceil(Math.abs(dateA.getTime() - dateB.getTime()) / MILLISECONDS_IN_DAY),
    0,
  );

  const totalYears = totalDays / DAYS_IN_YEAR;
  const roundedYears = Math.round(totalYears);

  if (totalYears >= MAX_DISPLAY_YEARS) return `${totalYears.toFixed()}+ years`;
  if (totalYears >= ROUNDING_THRESHOLD_YEARS) return `±${roundedYears} years`;

  const fullYears = Math.floor(totalYears);
  const months = Math.floor((totalYears - fullYears) * MONTHS_IN_YEAR);

  return `${fullYears} year${fullYears !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};

export default util;
