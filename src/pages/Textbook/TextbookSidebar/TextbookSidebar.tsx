import TextbookGroupsPagination from './TextbookGroupsPagination';
/* flex: 1 0 120px;
max-width: 120px; */
const TextbookSidebar = () => (
  <aside className="sticky top-10 h-screen">
    <TextbookGroupsPagination />
  </aside>
);

export default TextbookSidebar;
