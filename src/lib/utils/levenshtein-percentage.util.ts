import levenshteinUtil from "@/lib/utils/levenshtein.util";

const util = (a: string, b: string): number => {
  const distance = levenshteinUtil(a, b);
  const maxLength = Math.max(a.length, b.length);

  if (maxLength === 0) {
    return 0;
  }

  return 1 - distance / maxLength;
};

export default util;
