import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { ChevronDown } from '../icons';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Faq = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          {/* <dl className="mt-6 space-y-6 divide-y divide-gray-200"> */}
          <Accordion className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <>
                <AccordionItem key={faq.question} className="text-lg pt-6">
                  <AccordionItemHeading className="font-medium text-gray-900">
                    <AccordionItemButton className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDown
                          // className={classNames(
                          //   open ? '-rotate-180' : 'rotate-0',
                          //   'h-6 w-6 transform'
                          // )}
                          aria-hidden="true"
                        />
                      </span>
                      {faq.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                </AccordionItem>
                <AccordionItemPanel className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </AccordionItemPanel>
              </>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
