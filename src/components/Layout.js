import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#111111', color: '#ECE9E4' }}>
        {children}
      </main>
    </>
  );
};
