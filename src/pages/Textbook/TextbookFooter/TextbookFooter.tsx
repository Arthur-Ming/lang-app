import { useParams } from 'react-router';
import TextbookPagesPagination from '../TextbookPagesPagination';
import { useLoadWordsQuery } from '@/redux/api/words';
import classNames from 'classnames';

const TextbookFooter = () => {
  const { page, group } = useParams();

  const {
    isLoading: isWordsloading,
    isFetching: isWordsFetching,
    isError,
  } = useLoadWordsQuery({
    page: Number(page) - 1,
    group: Number(group) - 1,
  });
  return (
    <div
      className={classNames('container flex justify-end pb-8 pt-5', {
        invisible: isWordsloading || isWordsFetching || isError,
      })}
    >
      <TextbookPagesPagination />
    </div>
  );
};

export default TextbookFooter;
