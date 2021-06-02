import React from 'react';

export const Navbar = () => {
  return (
    <div
      className="absolute w-full top-0 left-0 z-50"
      style={{ color: '#ECE9E4' }}
    >
      <div className="flex px-4 py-4 max-w-7xl mx-auto">
        <div>Ws</div>
        <nav className="ml-auto">
          <a href="" className="mr-2">
            Home
          </a>
          <a href="" className="mr-2">
            About
          </a>
          <a href="" className="mr-2">
            My work
          </a>
          <a href="" className="mr-2">
            Services
          </a>
          <a href="">Contact</a>
        </nav>
      </div>
    </div>
  );
};
