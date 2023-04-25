import { IWord } from '@/types';
import WordAudio from './WordAudio';
import WordExample from './WordExample';
import WordMeaning from './WordMeaning';
import WordTranslate from './WordTranslate';
import { apiRoutes } from '@/utils/apiRoutes';
import WordChosen from '@pages/Textbook/WordChosen';

type Props = {
  word?: IWord;
};

const WordContent = ({ word }: Props) => {
  if (!word) return <div>No content</div>;
  const {
    id: wordId,
    word: wordText,
    image,
    transcription,
    wordTranslate,
    textMeaning,
    textMeaningTranslate,
    textExample,
    textExampleTranslate,
    audio,
    audioMeaning,
    audioExample,
  } = word;
  return (
    <div className="flex gap-x-7">
      <div className="flex  flex-auto items-center justify-center">
        <img
          className="h-[260px] min-w-[400px] rounded-md"
          src={apiRoutes.files(image)}
          alt={wordText}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-grow flex-col gap-y-5 pr-5 text-xl">
          <WordTranslate
            wordText={wordText}
            transcription={transcription}
            wordTranslate={wordTranslate}
            audio={audio}
          />
          <WordMeaning
            textMeaning={textMeaning}
            textMeaningTranslate={textMeaningTranslate}
            audio={audioMeaning}
          />
          <WordExample
            textExample={textExample}
            textExampleTranslate={textExampleTranslate}
            audio={audioExample}
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <WordAudio
            wordId={wordId}
            audio={audio}
            audioMeaning={audioMeaning}
            audioExample={audioExample}
          />
          <WordChosen word={word} />
        </div>
      </div>
    </div>
  );
};

export default WordContent;
