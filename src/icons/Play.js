import React from 'react';

export const Play = ({ width = '40', height = '40', fill = '#ECE9E4' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40ZM18.8867 12.9199C18.1196 12.4085 17.1332 12.3608 16.3204 12.7958C15.5075 13.2309 15 14.078 15 15V25C15 25.922 15.5075 26.7691 16.3204 27.2042C17.1332 27.6392 18.1196 27.5916 18.8867 27.0801L26.3867 22.0801C27.0822 21.6165 27.5 20.8359 27.5 20C27.5 19.1641 27.0822 18.3835 26.3867 17.9199L18.8867 12.9199Z"
        fill={fill}
      />
    </svg>
  );
};
