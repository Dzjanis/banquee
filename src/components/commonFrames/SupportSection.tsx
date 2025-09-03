import { useState } from 'react';
import { faqs } from '../../data/faqs';
import { FaPhone } from 'react-icons/fa6';
import { IoMailUnreadOutline } from 'react-icons/io5';

export const SupportSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='grid grid-cols-2 w-3/4 px-16 bg-white mb-40'>
      {/* Contact Info */}
      <div className='flex flex-col justify-start items-start py-4 gap-4'>
        <h2 className='text-3xl font-bold text-gray-800'>Need help?</h2>
        <div className='flex justify-between items-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl'>
            <FaPhone />
          </div>
          <a href='tel: +49 116 123 456' className='text-gray-600'>
            +49 116 123 456
          </a>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl'>
            <IoMailUnreadOutline />
          </div>
          <a href='mailto: help@banquee.com' className='text-gray-600 '>
            help@banquee.com
          </a>
        </div>
        <a href='/support' className='text-emerald-600 hover:underline'>
          Support →
        </a>
      </div>

      <div className='space-y-4'>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className='border-b pb-2'>
              <div
                className='flex justify-between items-center cursor-pointer'
                onClick={() => setOpenIndex(isOpen ? null : index)}>
                <p className='text-gray-800 font-bold'>{faq.question}</p>
                <span
                  className={`text-xl font-bold transform transition-transform duration-300 ${
                    isOpen ? 'rotate-45 text-red-500' : 'rotate-0 text-emerald-600'
                  }`}>
                  +
                </span>
              </div>

              {isOpen && <p className='mt-2 text-gray-600'>{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};
