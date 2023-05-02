import { wordAudioStop } from '@/redux/actions/audio';
import { useLoadUserWordsQuery } from '@/redux/api/userWords';
import { AppDispatch } from '@/redux/store';
import { IWord } from '@/types';
import WordModal from '@pages/Textbook/WordModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

const UserWord = () => {
  const navigate = useNavigate();
  const { wordId = '' } = useParams();
  const { userWord } = useLoadUserWordsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      userWord: data && data[wordId],
    }),
  });

  const [savedWord] = useState<IWord | undefined>(userWord);

  const dispatch: AppDispatch = useDispatch();

  const onCloseClick = () => {
    navigate(`/textbook/user-words`);
    dispatch(wordAudioStop());
  };

  return <WordModal word={savedWord} onClose={onCloseClick} />;
};

export default UserWord;
