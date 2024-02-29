import levenshteinPercentageUtil from "@/lib/utils/levenshtein-percentage.util";

const MINIMUM_LEVENSHTEIN_PERCENTAGE_RESULT = 0.25;

const util = (query: string, value: string, caseSensitive = false): boolean => {
  if (!caseSensitive) {
    query = query.toLowerCase();
    value = value.toLowerCase();
  }

  if (value.startsWith(query)) {
    return true;
  }

  return levenshteinPercentageUtil(query, value) >= MINIMUM_LEVENSHTEIN_PERCENTAGE_RESULT;
};

export default util;
