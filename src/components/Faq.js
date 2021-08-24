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
      'I apologize for not replying, but please be more specific with your questions. I do not answer questions that are easy to find in the music video description or on the website itself. Also, I do not reply if you are vague and not specific with your question.',
  },
  {
    question: 'Is your music free to use?',
    answer:
      'Most of my music can be used freely for non-commercial or small-budget media. Also, you can use my music on youtube, as long as you promote my work in exchange. But please read the individual song descriptions, all info will be included there.',
  },
  {
    question: 'Can I use your music commercially?',
    answer:
      'No, you need to purchase a commercial license. You can do so by contacting me privately via email. When contacting state the following - what song you want to use, for what purposes, your price offer.',
  },
  {
    question: 'Do you write music and sell exclusive rights to it?',
    answer:
      'Yes, please contact me for this matter privately. Keep in mind that the price range is higher for scoring with realizing my exclusive rights as a composer.',
  },
];

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const Faq = () => {
  return (
    <div className="mx-auto px-6 xl:px-0 py-8 sm:py-12 max-w-7xl">
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-center text-4xl sm:text-6xl">FAQs</h2>
        <Accordion allowZeroExpanded={true} className="mt-8">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              className="text-lg py-4 border-b-2 border-gray border-opacity-10"
            >
              <AccordionItemHeading className="hover:opacity-80 transition-opacity">
                <AccordionItemButton className="flex justify-between items-center">
                  {faq.question}
                  <span className="ml-6">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <ChevronDown
                          className={classNames(
                            expanded ? '-rotate-180' : 'rotate-0',
                            'w-5 sm:w-6 h-5 sm:h-6 transform transition-transform'
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </AccordionItemState>
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="mt-8 max-w-xl">
                <p className="text-base opacity-80 font-sans">{faq.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
