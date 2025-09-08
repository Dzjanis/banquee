import { AppBtn } from '../../commons/AppBtn';

type cardItemProps = {
  title: string;
  titleExt?: string;
  price: string;
  priceExt?: string;
  text: string;
  image: string;
};

export const CardItem = ({ title, titleExt = '', price, priceExt = '', text, image }: cardItemProps) => {
  return (
    <div className='flex flex-col justify-between items-center gap-4 bg-white h-auto'>
      <h4 className='text-md font-semibold '>
        {title}
        {titleExt && <span className='font-light p-2 bg-gray-200 rounded-sm text-emerald-400'>{titleExt}</span>}
      </h4>
      <h2 className='text-xl font-bold'>
        {price} <span className='font-light p-2'>{priceExt}</span>
      </h2>
      <p className='whitespace-normal break-words text-sm text-center'>{text}</p>
      <img src={`${image}`} alt='CreditCard' className='w-full h-auto object-contain' />
      <AppBtn text='Get started' />
    </div>
  );
};
