import { ISprintResult } from '@/types';
import Modal from '@components/Modal';
import { IoMdClose as CloseIcon } from 'react-icons/io';
import SprintGameResult from '../SprintGameResult';

type Props = {
  results: ISprintResult[];
  onClose: () => void;
  onPlay: () => void;
};

const SprintResultModal = ({ results, onClose, onPlay }: Props) => {
  return (
    <Modal>
      <div className="absolute left-1/2 top-0 min-h-screen min-w-[900px] -translate-x-1/2 rounded bg-section-dark p-5">
        <div className="flex items-center justify-between px-3">
          <button
            className="h-11 w-52 rounded-lg bg-blue-200 text-lg font-semibold text-gray-100 duration-200 hover:bg-blue-100"
            onClick={onPlay}
          >
            <span>Начать заново</span>
          </button>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center text-gray-200 hover:text-gray-100"
            onClick={onClose}
          >
            <CloseIcon className="h-6 w-6 " />
          </div>
        </div>
        <SprintGameResult results={results} />
      </div>
    </Modal>
  );
};

export default SprintResultModal;
