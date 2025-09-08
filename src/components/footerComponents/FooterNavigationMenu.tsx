import { Link, NavLink } from 'react-router-dom';
import banqueeLogo from '../../assets/banquee.png';

export const FooterNavigationMenu = () => {
  return (
    <>
      <nav className="w-3/4 h-[300px] p-4 grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4">
        <Link to="/">
          <img src={banqueeLogo} alt="Banquee" />
        </Link>
        <div className="">
          <a className="font-bold" href="">
            About
          </a>
          <ul className=" flex flex-col justify-center items-start gap-4 py-8 text-gray-400">
            <li>
              <NavLink
                to="/Features"
                className={({ isActive }) => (isActive ? 'text-emerald-300 font-bold' : 'text-gray-400')}
              >
                Features
              </NavLink>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="">
          <NavLink
            to="/Blog"
            className={({ isActive }) => (isActive ? 'text-emerald-300 font-bold' : 'text-gray-700 font-bold')}
          >
            Blog
          </NavLink>
          <ul className=" flex flex-col justify-center items-start gap-4 py-8 text-gray-400">
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Technology</a>
            </li>
            <li>
              <a href="">Crypto</a>
            </li>
          </ul>
        </div>
        <div className="">
          <a className="font-bold" href="">
            Web Flow
          </a>
          <ul className=" flex flex-col justify-center items-start gap-4 py-8 text-gray-400">
            <li>
              <a href="">Styleguide</a>
            </li>
            <li>
              <a href="">Licensing</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
        </div>
        <div className="">
          <a className="font-bold" href="">
            Social Media
          </a>
          <ul className=" flex flex-col justify-center items-start gap-4 py-8 text-gray-400">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>
    </>
  );
};
