import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <div className="bg-black text-gray">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
