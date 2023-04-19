import React from 'react';
import { Outlet } from 'react-router';
import TextbookFooter from '../TextbookFooter';
import TextbookHeader from '../TextbookHeader';
import TextbookWords from '../TextbookWords';
import TextbookSidebar from '../TextbookSidebar';

const TextbookView = () => (
  <main className="flex-auto">
    <div className="container pt-16">
      <TextbookHeader />
      <div className="flex justify-between pt-5">
        <TextbookSidebar />
        {/*   <ArrowButton prev /> */}
        <Outlet />
        {/*   <ArrowButton /> */}
      </div>
      <TextbookFooter />
    </div>
  </main>
);

export default React.memo(TextbookView);
