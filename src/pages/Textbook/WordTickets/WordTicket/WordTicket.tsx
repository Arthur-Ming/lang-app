import { ReactComponent as LabelIcon } from './label.svg';
import WordTicketAudio from './WordTicketAudio';
import { useNavigate } from 'react-router';
import classNames from 'classnames';
import { IWord } from '@/types';
import { apiRoutes } from '@/utils/apiRoutes';

type Props = {
  word: IWord;
};

const WordTicket = ({ word }: Props) => {
  const { id: wordId, word: wordText, image, transcription, wordTranslate, audio, group } = word;
  const navigate = useNavigate();

  return (
    <div
      className="relative flex h-14 items-center justify-between gap-x-14 bg-zinc-900 rounded-lg"
      onClick={() => navigate(wordId)}
    >
      <div className="flex items-center gap-x-10">
        <div className="h-14 rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={apiRoutes.files(image)} alt={wordText} />
        </div>
        <h3 className="text-2xl text-zinc-400">{`${wordText} - ${transcription} - ${wordTranslate}`}</h3>
      </div>

      <div className="">
        {/*  <WordChosen word={word} /> */}
        {/*  <WordTicketAudio wordId={wordId} audio={audio} /> */}
      </div>
      {/* <LabelIcon className={classNames(styles.label, styles[`level-${group + 1}`])} /> */}
    </div>
  );
};

export default WordTicket;
