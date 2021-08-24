import React from 'react';

export const Button = ({ children, dark, ...rest }) => {
  const darkClassNames = 'border-black bg-black text-gray';

  return (
    <button
      className={`uppercase inline-block text-base sm:text-lg border-2 px-10 py-3 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray cursor-pointer ${
        dark ? darkClassNames : 'gradient-border'
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
