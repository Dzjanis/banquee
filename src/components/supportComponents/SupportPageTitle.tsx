import SupTtlImg from '../../assets/supTtlIm.png';

export const SupportPageTitle = () => {
  return (
    <div className='flex justify-center items-center w-full h-auto bg-emerald-100'>
      <div className='flex justify-between w-3/4'>
        <div className='flex flex-col justify-center items-start px-6 m-10'>
          <p className='text-[24px]'>Support</p>
          <h3 className='font-semibold text-[70px]'>How can we help you?</h3>
        </div>
        <div className='flex self-end mt-20'>
          <img src={SupTtlImg} alt='Support' className='h-full w-auto object-contain px-12'></img>
        </div>
      </div>
    </div>
  );
};
