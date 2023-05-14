import React from 'react';
import { Outlet } from 'react-router';
import TextbookFooter from '../TextbookFooter';
import TextbookHeader from '../TextbookHeader';
import TextbookSidebar from '../TextbookSidebar';

const TextbookView = () => (
  <main className="flex-auto">
    <div className="container pl-10 pr-10 pt-16">
      <TextbookHeader />
      <div className="flex justify-between gap-x-10 pt-5">
        <TextbookSidebar />
        <Outlet />
      </div>
      <TextbookFooter />
    </div>
  </main>
);

export default React.memo(TextbookView);
