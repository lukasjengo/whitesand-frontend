import * as React from 'react';

export const Wave = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 4"
    >
      <path
        d="M9.13,2.94a13.23,13.23,0,0,1-2.7-1.19A14.61,14.61,0,0,0,3.86.57,12.43,12.43,0,0,0,0,0V1C.3,1,.61,1,1,1A9.66,9.66,0,0,1,6.49,2.51l.8.43Zm5.58,0h3.74l.82-.43A12.54,12.54,0,0,1,24.52.91V0A17.06,17.06,0,0,0,20,.56a13.91,13.91,0,0,0-2.57,1.18,13.81,13.81,0,0,1-2.7,1.19Zm-5.62,0H7.26A10,10,0,0,0,9,3.66a12.09,12.09,0,0,0,3.85.56,12.15,12.15,0,0,0,3.86-.56,10.25,10.25,0,0,0,1.75-.75H14.74a10.18,10.18,0,0,1-2.82.32A9.85,9.85,0,0,1,9.09,2.92Z"
        fill="#ece9e4"
        fillOpacity="1"
      />
    </svg>
  );
};

export const WaveLong = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 48 4"
    >
      <path
        d="M44.35.56a13.34,13.34,0,0,0-2.57,1.18,13.81,13.81,0,0,1-2.7,1.19,10.45,10.45,0,0,1-2.8.31,10.21,10.21,0,0,1-2.82-.31,13.79,13.79,0,0,1-2.67-1.18A14,14,0,0,0,28.22.57a12.28,12.28,0,0,0-3.7-.5h0A16.29,16.29,0,0,0,20,.63,13.76,13.76,0,0,0,17.41,1.8,12.7,12.7,0,0,1,14.71,3a10,10,0,0,1-2.79.32A10.14,10.14,0,0,1,9.1,3,13.43,13.43,0,0,1,6.43,1.82,13.27,13.27,0,0,0,3.86.64,12.14,12.14,0,0,0,0,.09v1c.3,0,.61,0,1,0A9.72,9.72,0,0,1,6.49,2.57L7.26,3h0l0,0h0A11.72,11.72,0,0,0,9,3.73a12.38,12.38,0,0,0,3.85.56,12.44,12.44,0,0,0,3.86-.56A11.67,11.67,0,0,0,18.45,3h0l0,0h0l.79-.42A12.54,12.54,0,0,1,24.49,1h.85a9.58,9.58,0,0,1,5.51,1.54l.78.41h0a10.63,10.63,0,0,0,1.72.72,12.15,12.15,0,0,0,3.86.56,12.09,12.09,0,0,0,3.85-.56,11.23,11.23,0,0,0,1.72-.73h0l0,0h0l.79-.41A12.46,12.46,0,0,1,48.88.91V0A16.94,16.94,0,0,0,44.35.56Z"
        fill="#ece9e4"
        fillOpacity="0.3"
      />
    </svg>
  );
};
