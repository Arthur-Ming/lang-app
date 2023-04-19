import TextbookGroupsPagination from './TextbookGroupsPagination';
/* flex: 1 0 120px;
max-width: 120px; */
const TextbookSidebar = () => (
  <aside className="sticky mt-5 top-10 h-screen w-32">
    <TextbookGroupsPagination />
  </aside>
);

export default TextbookSidebar;
