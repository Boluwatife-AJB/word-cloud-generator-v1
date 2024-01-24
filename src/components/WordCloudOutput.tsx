import React from 'react';
import {
  calculateFontSize,
  getRandomColor,
  randomAngleGenerator,
  getCenterWord,
} from '../utils/WordCloudUtils';

interface WordInfo {
  word: string;
  count: number;
  style: React.CSSProperties;
}

interface WordCloudRendererProps {
  wordFrequency: { [key: string]: number };
}

const WordCloudOutput: React.FC<WordCloudRendererProps> = ({
  wordFrequency,
}) => {
  const centerWord = getCenterWord(wordFrequency);

  const checkCollision = (
    position: { x: number; y: number },
    otherPositions: Array<{ x: number; y: number; radius: number }>
  ): boolean => {
    for (const otherPosition of otherPositions) {
      const distance = Math.sqrt(
        Math.pow(position.x - otherPosition.x, 2) +
          Math.pow(position.y - otherPosition.y, 2)
      );

      if (distance < otherPosition.radius) {
        return true; // Collision detected
      }
    }
    return false; // No collision
  };

  let words: WordInfo[] = [];

  if (wordFrequency) {
    words = Object.entries(wordFrequency).map(([word, count]) => {
      const fontSize = calculateFontSize(count);
      const color = getRandomColor();
      const angle = centerWord?.word ? randomAngleGenerator(0, 90) : 0;

      let position: { x: number; y: number; radius: number } = {
        x: 50,
        y: 50,
        radius: fontSize / 2, // Radius based on half of the font size
      };

      if (centerWord && word !== centerWord.word) {
        // Randomly position words
        let collisionDetected = true;
        let attempts = 0;

        // Extract x, y, and radius properties from existing styles
        const existingPositions = words.map((word) => ({
          x: parseFloat(word.style.left?.toString() ?? '0'),
          y: parseFloat(word.style.top?.toString() ?? '0'),
          radius: parseFloat(word.style.fontSize?.toString() ?? '0') / 2,
        }));

        // Limit the number of attempts to prevent potential infinite loops
        while (collisionDetected && attempts < 1000) {
          position = {
            x: Math.random() * 100,
            y: Math.random() * 350,
            radius: fontSize / 100000,
          };

          collisionDetected = checkCollision(position, existingPositions);
          attempts++;
        }
      }

      const isCenterWord = word === centerWord?.word;

      const wordInfo: WordInfo = {
        word,
        count,
        style: {
          fontSize: isCenterWord ? '50px' : `${fontSize}px`,
          color: isCenterWord ? 'red' : `${color}`,
          fontWeight: isCenterWord ? '900' : '400',
          order: isCenterWord ? 0 : 1,
          textTransform: isCenterWord ? 'uppercase' : 'lowercase',
          zIndex: isCenterWord ? '1000' : '1',
          opacity: isCenterWord ? '1' : '0.5',
          position: isCenterWord ? 'static' : 'absolute',
          top: isCenterWord ? '50%' : position.y ? `${position.y}%` : undefined,
          left: isCenterWord
            ? '50%'
            : position.x
            ? `${position.x}%`
            : undefined,
          transform: isCenterWord
            ? 'translate(-50%, -50%)'
            : `rotate(${angle}deg)`,
        },
      };

      return wordInfo;
    });
  }

  return (
    <div className="flex-1 mt-[3rem] lg:mt-0 h-full flex-wrap sm:w-1/2 w-full  relative">
      {words.map(({ word, count, style }) => (
        <span key={word} title={`Frequency: ${count}`} style={style}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordCloudOutput;
