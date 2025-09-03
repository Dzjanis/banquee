import { icons, titles, descriptions } from './ScnFrameCardsData';

export const ScnFrameCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {icons.map((Icon, index) => (
        <div key={index} className='p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition'>
          <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-emerald-400 text-xl mb-4'>
            <Icon />
          </div>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>{titles[index]}</h3>
          <p className='text-sm text-gray-500'>{descriptions[index]}</p>
        </div>
      ))}
    </div>
  );
};
