import TextbookGroupsPagination from './TextbookGroupsPagination';

const TextbookSidebar = () => (
  <aside className="sticky top-10 h-full flex-shrink-0 basis-32">
    <TextbookGroupsPagination />
  </aside>
);

export default TextbookSidebar;
