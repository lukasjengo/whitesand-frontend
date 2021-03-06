import React from 'react';

import { ContactForm } from '../components';

export const Contact = () => {
  return (
    <section className="mx-auto px-6 py-12 sm:py-20 max-w-7xl" id="contact">
      <h2 className="text-4xl sm:text-6xl">Get in touch</h2>
      <div className="flex flex-col lg:flex-row justify-between md:items-center mt-16">
        <div className="lg:w-5/12 self-center">
          <a
            href="mailto:whitesandcomposer@gmail.com"
            className="text-base sm:text-xl border-b-2 hover:opacity-70 transition-opacity"
          >
            whitesandcomposer@gmail.com
          </a>
        </div>
        <span className="text-base opacity-70 mt-10 md:mt-16 lg:mt-0 self-center">
          or
        </span>
        <div className="lg:w-5/12 max-w-2xl mt-10 md:mt-16 lg:mt-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
