import React from 'react';
import LeftBar from './LeftBar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <div className="leftbarWrapper">
        <LeftBar />
      </div>
      <div className="rightbarWrapper">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
