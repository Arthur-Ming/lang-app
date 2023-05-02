import classNames from 'classnames';
import { AiFillFire } from 'react-icons/ai';
import { IWord } from '@/types';
import {
  useAddUserWordMutation,
  useLoadUserWordsQuery,
  useRemoveUserWordMutation,
} from '@/redux/api/userWords';

type Props = {
  word: IWord;
};
const WordChosen = ({ word }: Props) => {
  const [addUserWord] = useAddUserWordMutation();
  const [removeUserWord] = useRemoveUserWordMutation();
  const { isUsersWord } = useLoadUserWordsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      isUsersWord: data && data[word.id] ? true : false,
    }),
  });

  return (
    <AiFillFire
      className={classNames('h-6 w-6 cursor-pointer text-gray-200', {
        'text-highlite': isUsersWord,
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (isUsersWord) {
          removeUserWord({ word });
        } else {
          addUserWord({ word });
        }
      }}
    />
  );
};

export default WordChosen;
