import { Link, NavLink } from 'react-router-dom';
import { AppBtn } from '../../commons/AppBtn';
import banqueeLogo from '../../assets/banquee.png';

export const HeaderNavigationMenu = () => {
  return (
    <div className="flex justify-between items-center w-3/4">
      <Link to="/">
        <img src={banqueeLogo} alt="Banquee" />
      </Link>
      <nav className="flex justify-center items-center gap-4 w-auto font-custom">
        <NavLink
          to="/Features"
          className={({ isActive }) => (isActive ? 'text-emerald-300 font-bold' : 'text-gray-700')}
        >
          Features
        </NavLink>

        <NavLink
          to="/Compare"
          className={({ isActive }) => (isActive ? 'text-emerald-300 font-bold' : 'text-gray-700')}
        >
          Compare
        </NavLink>

        <NavLink to="/Blog" className={({ isActive }) => (isActive ? 'text-emerald-300 font-bold' : 'text-gray-700')}>
          Blog
        </NavLink>
      </nav>
      <div className="flex justify-center items-center gap-4">
        <Link to="/loginPage" className="text-emerald-300 cursor-pointer">
          Login
        </Link>
        <Link to="/registerPage">
          <AppBtn text="OpenAccaunt" />
        </Link>
      </div>
    </div>
  );
};
