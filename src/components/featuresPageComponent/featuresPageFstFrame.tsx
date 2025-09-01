import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { AppBtn } from '../../commons/AppBtn';
import oneCard from '../../assets/cards2.png';

export const FeaturesPageFstFrame = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full h-[598px] bg-emerald-100'>
      <div className='flex flex-col justify-center items-center gap-10 py-5'>
        <p>Features</p>
        <h2 className='font-bold text-5xl'>All in one card.</h2>
        <p>Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
        <div className='flex justify-center items-center gap-4'>
          <Link to='/registerPage'>
            <AppBtn text='OpenAccaunt' />
          </Link>
          <Link to='/compare' className='text-emerald-300 cursor-pointer flex items-center gap-1'>
            Compare Cards <FiArrowRight />
          </Link>
        </div>
      </div>
      <div className='flex justify-between items-end w-3/4'>
        <img src={oneCard} className='h-full w-auto object-contain px-12' alt='CreditCard' />
      </div>
    </div>
  );
};
