import { useState } from 'react';
import WordCloudInput from './WordCloudInput';
import WordCloudOutput from './WordCloudOutput';

const WordCloudGenerator = () => {
  const [outputWordFrequency, setOutputWordFrequency] = useState<{
    [key: string]: number;
  }>({});

  const handleWordFrequencyChange = (frequency: { [key: string]: number }) => {
    // Update the output word frequency in the parent component
    setOutputWordFrequency(frequency);
  };

  return (
    <div className="font-lato-sans text-white lg:pt-4 w-full px-4 lg:px-10 overflow-x-hidden">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        Word Cloud Generator
      </h1>
      <h4 className="text-center my-4 text-base lg:text-lg">
        Transform your piece of text into an awesome{' '}
        <u className="text-[#ffd700] ">
          <i>word cloud</i>
        </u>
      </h4>
      <div className="mt-5 md:flex md:flex-row flex-col gap-5 justify-between">
        {/* WORD CLOUD INPUT */}
        <WordCloudInput onWordFrequencyChange={handleWordFrequencyChange} />

        {/* WORD CLOUD OUTPUT */}
        <WordCloudOutput wordFrequency={outputWordFrequency} />
      </div>
    </div>
  );
};

export default WordCloudGenerator;
