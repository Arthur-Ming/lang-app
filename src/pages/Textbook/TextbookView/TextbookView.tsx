import React from 'react';
import { Outlet } from 'react-router';
import TextbookFooter from '../TextbookFooter';
import TextbookHeader from '../TextbookHeader';
import TextbookWords from '../TextbookWords';

const TextbookView = () => (
  <main className="flex-auto">
    <div className="w-full">
      {/*    <TextbookHeader /> */}
      <div className="w-full">
        {/*  <TextbookSidebar /> */}
        {/*   <ArrowButton prev /> */}
        <TextbookWords />
        {/*   <ArrowButton /> */}
      </div>
      {/* <TextbookFooter /> */}
    </div>
  </main>
);

export default React.memo(TextbookView);
