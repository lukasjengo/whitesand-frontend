import React from 'react';
import { Link } from 'gatsby';

export const ButtonLink = ({ to, children, dark }) => {
  const darkClassNames = 'border-black bg-black text-gray';

  return (
    <Link
      to={to}
      className={`uppercase inline-block text-base sm:text-lg border-2 px-10 py-3 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray cursor-pointer ${
        dark ? darkClassNames : 'gradient-border'
      }`}
    >
      {children}
    </Link>
  );
};
