import { TableLine } from './TableLine';
import { iconMap } from '../../data/iconMap';
import { compareTabelesData } from '../../data/compareTablesData';

export const CompareTable = () => {
  return (
    <>
      {compareTabelesData.map((section, sectionIndex) => (
        <div key={sectionIndex} className='flex flex-col w-3/4 gap-4'>
          <div className='flex justify-start items-center border-b'>
            <h2 className='text-xl font-bold'>{section.title}</h2>
          </div>

          {section.item.map((line, lineIndex) => {
            const isValidIcon = line.icon in iconMap;

            return (
              <TableLine
                key={lineIndex}
                title={line.title}
                icon={isValidIcon ? (line.icon as keyof typeof iconMap) : 'default'}
                text={line.text}
                value={line.value}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};
