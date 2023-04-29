import React from 'react';

interface Props {
  word: string;
  mockWordTranslate: string;
}

const SprintGameWords = ({ word, mockWordTranslate }: Props) => {
  return (
    <>
      <p className="text-4xl font-semibold text-gray-200">{word}</p>
      <p className="text-3xl font-semibold text-gray-200">{mockWordTranslate}</p>
    </>
  );
};

export default React.memo(SprintGameWords);
