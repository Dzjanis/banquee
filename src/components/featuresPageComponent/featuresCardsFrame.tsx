import { FeatureCard } from './FeatureCard';
import { featuresData } from '../../data/featuresData';

export const FeatureCardsFrame = () => {
  const cards = featuresData.name.map((_, i) => ({
    img: featuresData.img[i],
    name: featuresData.name[i],
    title: featuresData.title[i],
    text: featuresData.text[i],
    listItems: featuresData.listItems,
  }));
  return (
    <div className='flex flex-col justify-between items-center w-3/4 py-10 gap-4'>
      {cards.map((card, i) => (
        <FeatureCard
          key={i}
          img={card.img}
          name={card.name}
          title={card.title}
          text={card.text}
          listItems={card.listItems}
        />
      ))}
    </div>
  );
};
