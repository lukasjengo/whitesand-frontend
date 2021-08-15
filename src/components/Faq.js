import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

import { ChevronDown } from '../icons';

const faqs = [
  {
    question: 'Why did you not get back to me on email?',
    answer:
      'I apologize for not replying, but please be more specific with your questions. I do not answer questions that are easy to find for instance in the music video description or on the website itself. Also, I do not reply if you are very vague and not specific.',
  },
  {
    question: 'Is your music free to use?',
    answer:
      'Most of my music can be used freely for non-commercial or small-budget media. Also, you can use my music on youtube, as long as you promote my work in exchange. But please read the individual song descriptions, all info will be included there.',
  },
  {
    question: 'Can I use your music commercially?',
    answer:
      'No, you need to purchase a commercial license. You can do so by contacting me privately with an email, state the following - what song do you want to use, for what purposes, your price offer.',
  },
  {
    question: 'Do you write music and sell exclusive rights to it?',
    answer:
      'Yes, please contact me for this matter privately, keep in mind that the price range is higher for scoring with realizing my exclusive rights as a composer.',
  },
];

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const Faq = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-7xl">FAQs</h2>
          <Accordion
            allowZeroExpanded={true}
            className="mt-6 space-y-6 divide-y divide-gray-200"
            // onChange={(ids) => setOpenAccordions(ids)}
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} className="text-lg pt-6">
                <AccordionItemHeading className="font-medium text-gray-900">
                  <AccordionItemButton className="text-left w-full flex justify-between items-start text-gray-400">
                    {faq.question}
                    <span className="ml-6 h-7 flex items-center">
                      <AccordionItemState>
                        {({ expanded }) => (
                          <ChevronDown
                            className={classNames(
                              expanded ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        )}
                      </AccordionItemState>
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="mt-2 pr-12">
                  <p className="text-base text-gray-400 font-sans">
                    {faq.answer}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
