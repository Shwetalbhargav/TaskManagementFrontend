'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Is Asana free to use?',
    answer: 'Yes, Asana offers a free tier with basic features for individuals and small teams.',
  },
  {
    question: 'Can I integrate Asana with other tools?',
    answer: 'Absolutely. Asana connects with 200+ tools like Slack, Google Drive, Zoom, and more.',
  },
  {
    question: 'What’s the difference between tasks and projects?',
    answer: 'Projects are collections of tasks that help you organize work toward a larger goal.',
  },
  {
    question: 'Do you offer templates?',
    answer: 'Yes. Asana includes templates for marketing, engineering, product, HR, and more.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium text-lg focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
