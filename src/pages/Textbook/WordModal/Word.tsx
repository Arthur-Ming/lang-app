import { IoMdClose as CloseIcon } from 'react-icons/io';
import WordContent from './WordContent';
import { IWord } from '@/types';
import Modal from '@components/Modal';

type Props = {
  onClose: () => void;
  word?: IWord;
};

const Word = ({ word, onClose }: Props) => (
  <Modal handleClickOutside={onClose}>
    <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-5 bg-red-900 z-999">
      <div className="" onClick={onClose}>
        <CloseIcon className="" />
      </div>
      <WordContent word={word} />
    </div>
  </Modal>
);

export default Word;
