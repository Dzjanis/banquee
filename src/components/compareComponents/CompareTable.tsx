type CompareTableProps = {
  title: string;
  item: [
    {
      title: string;
      icon: string;
      text: string;
      value: string[];
    }
  ];
};

export const CompareTable = ({ title }: CompareTableProps) => {
  return (
    <>
      <div className='flex w-3/4 justify-start items-center border-b'>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
      {/* {item.map(item) => <div className='grid grid-cols-4 w-3/4 h-auto bg-amber-200'></div>} */}
    </>
  );
};
