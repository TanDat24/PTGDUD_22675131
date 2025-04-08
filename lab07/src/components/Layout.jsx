import React from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import DetailedReport from './DetailedReport';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8">
          <Overview />
          <DetailedReport />
        </main>
      </div>
    </div>
  );
};

export default Layout; 