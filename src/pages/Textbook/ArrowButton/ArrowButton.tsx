import { ReactComponent as ArrowPrevIcon } from './arrow-prev.svg';
import { ReactComponent as ArrowNextIcon } from './arrow-next.svg';
import classNames from 'classnames';
import { useMatch, useNavigate, useParams } from 'react-router';
import clientRoutes from '@/utils/clientRoutes';
import { DEFAULT_PAGE, PAGE_COUNT, PAGE_SHIFT } from '@/constants';
import { useLoadWordsQuery } from '@/redux/api/words';

type OwnProps = {
  prev?: boolean;
};

type Props = OwnProps;

const ArrowButton = ({ prev }: Props) => {
  const { page = null, group = null } = useParams();

  const {
    isLoading: isWordsloading,
    isFetching: isWordsFetching,
    isSuccess,
    isError,
  } = useLoadWordsQuery({
    page: Number(page) - 1,
    group: Number(group) - 1,
  });

  const navigate = useNavigate();
  const isHardWords = useMatch('textbook/user-words');
  const onNextClick = () => {
    if (page !== null && group !== null) {
      navigate(clientRoutes.textbook.words.relative(Number(page) + PAGE_SHIFT, group));
    }
  };

  const onPrevClick = () => {
    if (page !== null && group !== null) {
      navigate(clientRoutes.textbook.words.relative(Number(page) - PAGE_SHIFT, group));
    }
  };
  return (
    <div
      className={classNames('sticky top-10 mb-[30vh] mt-[40vh] w-14', {
        'h-full': isWordsloading || isWordsFetching || isError,
        'h-screen': !isWordsloading && !isWordsFetching && !isError,
        invisible: !isSuccess,
        visible: isSuccess,
      })}
    >
      {prev ? (
        <button
          className="absolute left-1/2  top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-full opacity-30 duration-200 ease-linear hover:opacity-60 disabled:opacity-10"
          onClick={onPrevClick}
          disabled={Number(page) === DEFAULT_PAGE || isWordsloading}
        >
          <ArrowPrevIcon
            className={classNames('h-full w-full text-gray-200', {
              '': isHardWords,
            })}
          />
        </button>
      ) : (
        <button
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-full opacity-30 duration-200 ease-linear hover:opacity-60 disabled:opacity-10"
          onClick={onNextClick}
          disabled={Number(page) === PAGE_COUNT || isWordsloading}
        >
          <ArrowNextIcon
            className={classNames('h-full w-full text-gray-200', '', {
              '': isHardWords,
            })}
          />
        </button>
      )}
    </div>
  );
};

export default ArrowButton;
