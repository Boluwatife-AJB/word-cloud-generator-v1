import React, { useState } from 'react';
import Button from './Button';
import { processText, countWordFrequency } from '../utils/WordCloudUtils';

interface WordCloudInputProps {
  onWordFrequencyChange: (frequency: { [key: string]: number }) => void;
}

const WordCloudInput: React.FC<WordCloudInputProps> = ({
  onWordFrequencyChange,
}) => {
  const [text, setText] = useState<string>('');

  const generateWordCloud = () => {
    const processedText = processText(text);
    const frequency = countWordFrequency(processedText);

    // Pass the word frequency to the parent component
    onWordFrequencyChange(frequency);
  };

  const resetWordCloud = () => {
    setText('');
    // You can choose to reset or notify the parent component about the reset action
    onWordFrequencyChange({});
  };

  return (
    <div className="flex-1 sm:w-1/2 w-full ">
      <p>Enter your text here:</p>
      <textarea
        placeholder="Enter text here..."
        className="w-full mt-2 rounded-xl focus:outline-none font-lato-sans px-4 py-5 border border-[#5e72e4]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex mt-4 items-center justify-center gap-[2rem]">
        <Button
          className="bg-[#5e72e4] text-white "
          onClick={generateWordCloud}
        >
          Generate Word Cloud
        </Button>
        <Button className="bg-[#ff6347] text-white" onClick={resetWordCloud}>
          Reset Word Cloud
        </Button>
      </div>
    </div>
  );
};

export default WordCloudInput;
