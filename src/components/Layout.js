import React from 'react';

import { Navbar, Footer } from '../components';

export const Layout = ({ children }) => {
  return (
    <div className="bg-black text-gray">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
