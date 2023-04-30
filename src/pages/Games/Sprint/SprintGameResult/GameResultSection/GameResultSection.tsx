import { SprintGameAnswer } from '@/types';
import SprintGameResultItem from '../SprintGameResultItem';

type Props = {
  filtredAnswers: SprintGameAnswer[];
  isTrueAnswers: boolean;
};

const GameResultSection = ({ filtredAnswers, isTrueAnswers }: Props) => {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2 text-2xl ">
        {isTrueAnswers && (
          <>
            <h5>Правильные ответы</h5>
            <span className="rounded bg-success px-3 py-1 text-gray-100">
              {filtredAnswers.length}
            </span>
          </>
        )}
        {!isTrueAnswers && (
          <>
            <h5>Не правильные ответы</h5>
            <span className="rounded bg-fail px-3 py-1 text-gray-100">{filtredAnswers.length}</span>
          </>
        )}
      </div>

      <div className="inline-flex flex-col gap-y-2">
        {filtredAnswers.map((answer) => (
          <SprintGameResultItem key={answer.id} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default GameResultSection;
