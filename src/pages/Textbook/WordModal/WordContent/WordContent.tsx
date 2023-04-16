import { IWord } from '@/types';
import WordAudio from './WordAudio';
import WordExample from './WordExample';
import WordMeaning from './WordMeaning';
import WordTranslate from './WordTranslate';
import { apiRoutes } from '@/utils/apiRoutes';

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
    <div>
      <div>
        <img src={apiRoutes.files(image)} alt={wordText} />
      </div>
      <div>
        <div>
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
        <div>
          {/*  <WordAudio
            wordId={wordId}
            audio={audio}
            audioMeaning={audioMeaning}
            audioExample={audioExample}
          /> */}
          {/*   <WordChosen word={word} /> */}
        </div>
      </div>
    </div>
  );
};

export default WordContent;
