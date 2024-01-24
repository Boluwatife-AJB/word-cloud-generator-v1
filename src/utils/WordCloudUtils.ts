// WORD CLOUD INPUT
export const processText = (inputText: string): string[] => {
  const stopWords = [
    'the',
    'and',
    'is',
    'in',
    'it',
    'to',
    'of',
    'for',
    'with',
    'that',
    'this',
    'a',
    's',
    'd',
    'an',
    'if',
    'can',
    'by',
    'you',
    'your',
    'as',
    'get',
    'new',
    'not',
    'at',
    'on',
    'its',
    'are',
    't',
    'or',
    'be',
    'do',
    'don',
    'but',
    'I',
  ];
  const words = (inputText.toLowerCase().match(/\b\w+\b/g) || []).filter(
    (word) =>
      !stopWords.includes(word) &&
      /^[a-zA-Z]+$/.test(word) && // Check if the word contains only letters
      !word.includes("'") &&
      !word.includes('.')
  );
  return words;
};

export const countWordFrequency = (
  words: string[]
): { [key: string]: number } => {
  const frequency: { [key: string]: number } = {};
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  return frequency;
};

// WORD CLOUD OUTPUT
export const calculateFontSize = (count: number): number => {
  const minFontSize = 16;
  const maxFontSize = 45;
  const scaleFactor = 10;
  return Math.max(minFontSize, Math.min(maxFontSize, count * scaleFactor));
};

export const getRandomColor = (): string => {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
};

export const randomAngleGenerator = (...options: number[]): number => {
  const randIndex = Math.floor(Math.random() * options.length);
  return options[randIndex];
};

export const getCenterWord = (wordFrequency: {
  [key: string]: number;
}): { word: string; count: number } | undefined => {
  const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
  return sortedWords[0]
    ? { word: sortedWords[0][0], count: sortedWords[0][1] }
    : undefined;
};
