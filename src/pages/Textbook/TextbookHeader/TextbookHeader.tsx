import TextbookPagesPagination from '../TextbookPagesPagination';

const TextbookHeader = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-3xl text-gray-200 font-bold">Textbook</h2>
    <TextbookPagesPagination />
  </div>
);

export default TextbookHeader;
