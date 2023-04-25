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
    <div className="absolute left-2/4 top-2/4 z-999 min-w-[900px] -translate-x-2/4 -translate-y-2/4 rounded-md bg-section-dark p-5 text-gray-200">
      <div
        className="absolute right-2 top-3 cursor-pointer p-1 hover:text-gray-100"
        onClick={onClose}
      >
        <CloseIcon className="h-6 w-6" />
      </div>
      <WordContent word={word} />
    </div>
  </Modal>
);

export default Word;
