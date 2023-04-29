import { memo } from 'react';
import { AnswerType } from '@/types';

interface Props {
  onAnswerButtonClick: (answerType: AnswerType) => void;
  disabled: boolean;
}

const SprintGameButtons = ({ onAnswerButtonClick, disabled }: Props) => (
  <div className="flex justify-around">
    <button
      className="h-11 w-52 rounded-lg bg-blue-200 text-lg font-semibold text-gray-100 duration-200 hover:bg-blue-100"
      onClick={() => onAnswerButtonClick(AnswerType.wrong)}
      disabled={disabled}
    >
      Неверно
    </button>
    <button
      className="h-11 w-52 rounded-lg bg-blue-200 text-lg font-semibold text-gray-100 duration-200 hover:bg-blue-100"
      onClick={() => onAnswerButtonClick(AnswerType.correct)}
      disabled={disabled}
    >
      Верно
    </button>
  </div>
);

export default memo(SprintGameButtons);
