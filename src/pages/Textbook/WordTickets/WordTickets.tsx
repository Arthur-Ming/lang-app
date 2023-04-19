import { IWord } from '@/types';
import WordTicket from './WordTicket';

type Props = {
  words: IWord[];
};

const WordTickets = ({ words }: Props) => (
  <div className="container flex flex-col gap-y-3">
    {words.map((word) => (
      <WordTicket key={word.id} word={word} />
    ))}
  </div>
);

export default WordTickets;
