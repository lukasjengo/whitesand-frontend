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
      <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="mt-1 text-sm text-gray-500">{description}</p>
              {actionElement && actionElement}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={handleClick}
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-dark"
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
