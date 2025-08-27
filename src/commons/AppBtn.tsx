type AppBtrProps = {
  text: string;
  typeVal?: 'button' | 'submit';
};

export const AppBtn: React.FC<AppBtrProps> = ({ text, typeVal = 'button' }) => {
  return (
    <button type={typeVal} className='flex w-auto h-auto bg-emerald-300 text-white cursor-pointer rounded-md'>
      <span className='px-4 py-1'>{`${text}`}</span>
    </button>
  );
};
