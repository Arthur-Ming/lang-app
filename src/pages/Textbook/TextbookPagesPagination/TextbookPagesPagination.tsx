import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowPrev } from './arrow-prev.svg';
import { ReactComponent as ArrowNext } from './arrow-next.svg';
import { useMatch, useNavigate, useParams } from 'react-router';
import classNames from 'classnames';
import clientRoutes from '@/utils/clientRoutes';
import { PAGE_COUNT, PAGE_SHIFT } from '@/constants';

const TextbookPagesPagination = () => {
  const { page: currentPage = 1, group = 1 } = useParams();

  /* const { isFetching } = useLoadWordsQueryState({
    page: Number(currentPage) - 1,
    group: Number(group) - 1,
  }); */

  const isHardWords = useMatch('textbook/user-words');
  const navigate = useNavigate();
  const handlePageClick = ({ selected }: { selected: number }) => {
    navigate(clientRoutes.textbook.words.relative(selected + PAGE_SHIFT, group));
  };

  return (
    <div
      className={classNames('bg-main-dark', {
        'opacity-50': false,
        invisible: isHardWords,
      })}
    >
      <ReactPaginate
        nextLabel={<ArrowNext className="w-7 h-7" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        forcePage={Number(currentPage) - PAGE_SHIFT}
        pageCount={PAGE_COUNT}
        previousLabel={<ArrowPrev className="w-7 h-7" />}
        disableInitialCallback={true}
        pageClassName="w-12 bg-section-dark rounded opacity-80 hover:opacity-100"
        pageLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        previousClassName="w-12 rounded opacity-70 hover:opacity-100"
        previousLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        nextClassName="w-12 rounded opacity-70 hover:opacity-100"
        nextLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        breakLabel="..."
        breakClassName="w-12 bg-section-dark rounded opacity-80 hover:opacity-100"
        breakLinkClassName="flex justify-center cursor-pointer text-lg text-gray-200"
        containerClassName="flex gap-x-1"
        activeClassName="outline opacity-100 outline-2 outline-highlite"
        disabledClassName=""
      />
    </div>
  );
};

export default TextbookPagesPagination;
