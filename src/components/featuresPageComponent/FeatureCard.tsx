import { FeatureCardList } from './FeaturesCardList';

type FeatureCardProps = {
  img: string;
  name: string;
  title: string;
  text: string;
  listItems: string[];
};

export const FeatureCard = ({ img, name, title, text, listItems }: FeatureCardProps) => {
  return (
    <div className='grid grid-cols-2 w-3/4 bg-white'>
      <div className='flex flex-col justify-center items-Start gap-4'>
        <p>{name}</p>
        <h3 className='font-bold text-3xl'>{title}</h3>
        <p>{text}</p>
        <FeatureCardList items={listItems} />
      </div>
      <div className='flex items-center justify-center'>
        <img src={`${img}`} alt='AppScreenShot' className='h-3/4 w-auto object-contain px-12'></img>
      </div>
    </div>
  );
};
