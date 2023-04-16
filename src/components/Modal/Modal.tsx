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
        className="fixed w-full h-full top-0 left-0 overflow-y-auto z-999 bg-modal"
        ref={modalWrapperRef}
        onClick={handleClick}
      >
        {children}
      </div>
    </ModalRoot>
  );
};

export default Modal;
