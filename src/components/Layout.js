import React from 'react';

import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="bg-black text-gray">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
