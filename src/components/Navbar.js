import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Spotify, Youtube } from '../icons';

import logo from '../assets/images/whitesand-logo.svg';

export const Navbar = () => {
  return (
    <Popover className="absolute w-full top-0 left-0 z-50">
      {({ open }) => (
        <>
          <div className="flex items-center px-6 py-5 sm:py-10 mx-auto max-w-7xl">
            <Link to="/">
              <img src={logo} alt="whitesand logo" className="w-10 sm:w-12" />
            </Link>
            <nav className="hidden sm:block ml-auto text-base lg:text-lg">
              <Link
                to="/"
                className="mr-4 md:mr-7 hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="mr-4 md:mr-7 hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <Link
                to="/#my-work"
                className="mr-4 md:mr-7 hover:opacity-70 transition-opacity"
              >
                My work
              </Link>
              <Link
                to="/#services"
                className="mr-4 md:mr-7 hover:opacity-70 transition-opacity"
              >
                Services
              </Link>
              <Link
                to="/#contact"
                className="hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            </nav>
            <div className="sm:hidden ml-auto">
              <Popover.Button className="p-2 inline-flex items-center justify-center hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
                <span className="sr-only">Open navigation menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              static
              className="bg-black absolute top-0 z-10 lg:hidden w-screen h-screen"
            >
              <div className="flex items-center px-6 py-5 sm:py-10 mx-auto max-w-7xl">
                <Popover.Button as="div">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="whitesand logo"
                      className="w-10 sm:w-12"
                    />
                  </Link>
                </Popover.Button>
                <Popover.Button className="p-2 inline-flex items-center justify-center hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray ml-auto">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="flex flex-col mt-7 items-center justify-around text-xl">
                <Popover.Button as="div" className="mb-7">
                  <Link to="/" className="hover:opacity-70 transition-opacity">
                    Home
                  </Link>
                </Popover.Button>
                <Popover.Button as="div" className="mb-7">
                  <Link
                    to="/#about"
                    className="hover:opacity-70 transition-opacity"
                  >
                    About
                  </Link>
                </Popover.Button>
                <Popover.Button as="div" className="mb-7">
                  <Link
                    to="/#my-work"
                    className="hover:opacity-70 transition-opacity"
                  >
                    My work
                  </Link>
                </Popover.Button>
                <Popover.Button as="div" className="mb-7">
                  <Link
                    to="/#services"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Services
                  </Link>
                </Popover.Button>
                <Popover.Button as="div" className="mb-7">
                  <Link
                    to="/#contact"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Contact
                  </Link>
                </Popover.Button>
                <div className="flex">
                  <a
                    href="https://open.spotify.com/artist/3GXunV3wsCpSdKp0L5tcNH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Spotify className="w-7 h-7" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCe96JG5gdgSRtmqStx0isXA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-7 h-7 ml-4" />
                  </a>
                </div>
              </nav>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
