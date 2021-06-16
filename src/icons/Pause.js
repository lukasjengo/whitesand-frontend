import React from 'react';

export const Pause = ({ width = '40', height = '40', fill = '#ECE9E4' }) => {
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
        d="M0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20ZM27.5 15C27.5 13.6193 26.3807 12.5 25 12.5C23.6193 12.5 22.5 13.6193 22.5 15V25C22.5 26.3807 23.6193 27.5 25 27.5C26.3807 27.5 27.5 26.3807 27.5 25V15ZM15 12.5C16.3807 12.5 17.5 13.6193 17.5 15V25C17.5 26.3807 16.3807 27.5 15 27.5C13.6193 27.5 12.5 26.3807 12.5 25V15C12.5 13.6193 13.6193 12.5 15 12.5Z"
        fill={fill}
      />
    </svg>
  );
};
