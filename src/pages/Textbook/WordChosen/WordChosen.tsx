import classNames from 'classnames';
import { AiFillFire } from 'react-icons/ai';
import { connect } from 'react-redux';
import { IWord } from '@/types';
import { useAddUserWordMutation, useRemoveUserWordMutation } from '@/redux/api/userWords';
import { RootState } from '@/redux/store';
import { userWordsByIdSelector } from '@/redux/selectors/userWords';

type StateProps = {
  isChosen: boolean;
};

type OwnProps = {
  word: IWord;
};

type Props = OwnProps & StateProps;

const WordChosen = ({ word, isChosen }: Props) => {
  const [addUserWord] = useAddUserWordMutation();
  const [removeUserWord] = useRemoveUserWordMutation();

  return (
    <AiFillFire
      className={classNames('h-6 w-6 cursor-pointer text-gray-200', {
        'text-highlite': isChosen,
      })}
      onClick={(e) => {
        e.stopPropagation();
        if (isChosen) {
          removeUserWord(word);
        } else {
          addUserWord(word);
        }
      }}
    />
  );
};

const mapStateToProps = (state: RootState, { word }: OwnProps) => ({
  isChosen: Boolean(userWordsByIdSelector(state, { wordId: word.id })),
});

export default connect(mapStateToProps)(WordChosen);
