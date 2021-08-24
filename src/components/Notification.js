import React from 'react';
import { XIcon } from '../icons';

export const Notification = ({
  icon,
  actionElement,
  title,
  description,
  setShow,
  closeAction,
}) => {
  const handleClick = () => {
    setShow(null);
    if (closeAction) {
      closeAction();
    }
  };

  return (
    <div className="z-40 fixed top-16 right-0 inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:justify-end">
      <div className="max-w-sm w-full bg-white pointer-events-auto">
        <div className="p-4">
          <div className="flex items-start text-black">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-3 flex-1">
              <p className="text-sm">{title}</p>
              {actionElement && actionElement}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={handleClick}
                className="bg-white inline-flex text-black hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              >
                <span className="sr-only">Close</span>
                <XIcon className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
