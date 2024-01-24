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
    <div className="font-lato-sans mt-4 w-full lg:px-10 ">
      <h1 className="text-center text-4xl font-bold">World Cloud Generator</h1>
      <h4 className="text-center text-2xl">
        Transform your piece of text into an awesome word cloud
      </h4>
      <div className=" mt-5 lg:px-12 px-4 flex-col md:flex-row flex gap-5  items-center justify-between">
        {/* WORD CLOUD INPUT */}
        <WordCloudInput onWordFrequencyChange={handleWordFrequencyChange} />
        {/* Divider */}
        {/* <hr className="w-[300px] rotate-90 h-full bg-red-900" /> */}
        {/* WORD CLOUD OUTPUT */}
        <WordCloudOutput wordFrequency={outputWordFrequency} />
      </div>
    </div>
  );
};

export default WordCloudGenerator;
