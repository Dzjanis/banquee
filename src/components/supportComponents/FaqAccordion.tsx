import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

export const FaqAccordion = ({ faqs }: { faqs: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='w-full'>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className='w-full border-b pb-2'>
            <div
              className='flex justify-between items-center cursor-pointer w-full'
              onClick={() => setOpenIndex(isOpen ? null : index)}>
              <p className='text-gray-800 font-bold w-full'>{faq.question}</p>
              <span
                className={`text-xl font-bold transform transition-transform duration-300 ${
                  isOpen ? 'rotate-45 text-red-500' : 'rotate-0 text-emerald-600'
                }`}>
                +
              </span>
            </div>

            {isOpen && <p className='w-full mt-2 text-gray-600'>{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};
