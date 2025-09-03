import { FeatureCard } from './FeatureCard';
import { featuresData } from '../../data/featuresData';

export const FeatureCardsFrame = () => {
  const cards = featuresData.map((feature) => ({
    img: feature.img,
    name: feature.name,
    title: feature.title,
    text: feature.text,
    listItems: feature.listItems,
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
