import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { IWord } from '@/types';
import WordModal from '@pages/Textbook/WordModal';
import { useLoadWordsQueryState } from '@/redux/api/words';
import { AppDispatch } from '@/redux/store';
import { wordAudioStop } from '@/redux/actions/audio';

const TextbookWord = () => {
  const navigate = useNavigate();
  const { page, group, wordId } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { data } = useLoadWordsQueryState({
    page: Number(page) - 1,
    group: Number(group) - 1,
  });

  const word: IWord | undefined = data && data.find(({ id }) => id === wordId);
  const onCloseClick = () => {
    navigate(`/textbook/${page}/${group}`);
    dispatch(wordAudioStop());
  };

  return <WordModal word={word} onClose={onCloseClick} />;
};

export default TextbookWord;
