const util = (a: string, b: string): number => {
  const an = a.length;
  const bn = b.length;
  if (an === 0) return bn;
  if (bn === 0) return an;
  const matrix = new Array<number[]>(bn + 1);

  // Initialize the first column of the matrix
  for (let i = 0; i <= bn; ++i) {
    matrix[i] = [i];
  }

  // Initialize the first row of the matrix
  for (let j = 0; j <= an; ++j) {
    matrix[0][j] = j;
  }

  // Populate the matrix
  for (let i = 1; i <= bn; ++i) {
    for (let j = 1; j <= an; ++j) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // Deletion
          matrix[i][j - 1] + 1, // Insertion
          matrix[i - 1][j - 1] + 1, // Substitution
        );
      }
    }
  }

  return matrix[bn][an];
};

export default util;
