import React from 'react';

export const Navbar = () => {
  return (
    <div
      className="absolute w-full top-0 left-0 z-50"
      style={{ color: '#ECE9E4' }}
    >
      <div
        className="flex items-center px-4 py-10 mx-auto"
        style={{ maxWidth: '1400px' }}
      >
        <div className="text-3xl">Ws</div>
        <nav className="ml-auto text-base uppercase">
          <a href="" className="mr-6">
            Home
          </a>
          <a href="" className="mr-6">
            About
          </a>
          <a href="" className="mr-6">
            My work
          </a>
          <a href="" className="mr-6">
            Services
          </a>
          <a href="">Contact</a>
        </nav>
      </div>
    </div>
  );
};
