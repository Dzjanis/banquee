import { CardItem } from './CardItem';
import { cardsCompareData } from '../../data/cardsCompareData';

export const CardsCompareFrame = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr] w-3/4 bg-white'>
      <div></div>
      <div className='flex justify-center items-center gap-2'>
        {cardsCompareData.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            titleExt={card.titleExt}
            price={card.price}
            priceExt={card.priceExt}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};
