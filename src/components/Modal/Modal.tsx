import cn from 'classnames';
import { RefObject, useRef } from 'react';
import ModalRoot from './ModalRoot';

interface Props {
  handleClickOutside?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children, handleClickOutside }) => {
  const modalWrapperRef: RefObject<HTMLDivElement> = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (modalWrapperRef.current === event.target && handleClickOutside) {
      handleClickOutside();
    }
  };

  return (
    <ModalRoot>
      <div
        className="fixed left-0 top-0 z-999 h-full w-full overflow-y-auto bg-modal-dark"
        ref={modalWrapperRef}
        onClick={handleClick}
      >
        {children}
      </div>
    </ModalRoot>
  );
};

export default Modal;
