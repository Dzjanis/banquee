import { MdSecurity } from 'react-icons/md';
import { supportFaqs } from '../../data/supportFaqs';
import { FaqAccordion } from './FaqAccordion';

export const FaqSection = () => {
  return (
    <div className='flex flex-col justify-start items-start w-full'>
      {supportFaqs.map((item) => {
        return (
          <div key={item.category} className='w-full'>
            <div className='flex items-center gap-4 p-6 w-full'>
              <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl mb-4'>
                <MdSecurity />
              </div>
              <h3 id={item.category} className='text-lg font-semibold text-gray-800 mb-2'>
                {item.category}
              </h3>
            </div>
            <FaqAccordion faqs={item.faq} />
          </div>
        );
      })}
    </div>
  );
};
