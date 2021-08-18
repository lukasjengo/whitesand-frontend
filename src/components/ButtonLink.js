import React from 'react';
import { Link } from 'gatsby';

export const ButtonLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="uppercase block text-base sm:text-lg border-2 px-10 py-3 gradient-border hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray cursor-pointer"
    >
      {children}
    </Link>
  );
};
