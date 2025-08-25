import { Link, NavLink } from 'react-router-dom';
import { OpenAccBtn } from '../../commons/OpenAccBtn';

export const HeaderNavigationMenu = () => {
  return (
    <div className='flex justify-between items-center w-3/4'>
      <Link to='/'>
        <img src='../../asets/banquee.png' alt='' />
      </Link>
      <nav className='flex justify-center items-center gap-4 w-auto font-custom'>
        <NavLink to='/Features' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          Features
        </NavLink>

        <NavLink to='/Compare' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          Compare
        </NavLink>

        <NavLink to='/Blog' className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
          Blog
        </NavLink>
      </nav>
      <div className='flex justify-center items-center gap-4'>
        <Link to='/' className='text-emerald-300 cursor-pointer'>
          Login
        </Link>
        <OpenAccBtn />
      </div>
    </div>
  );
};
