import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
              isDarkMode ? "bg-black" : "bg-white"
            } rounded-box w-52`}
          >
            <li>
              <NavLink
                className={`${isDarkMode && "dark-mode-navlink"}`}
                to={`/`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${isDarkMode && "dark-mode-navlink"}`}
                to={`/all-tourist-sports`}
              >
                All Tourist Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${isDarkMode && "dark-mode-navlink"}`}
                to={`/add-tourist-sports`}
              >
                Add Tourist Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${isDarkMode && "dark-mode-navlink"}`}
                to={`/my-list`}
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn text-dim-black btn-ghost lg:text-xl md:text-lg text-base">
          Samir&apos;s Travel Agency
        </a>
      </div>
      <div className="navbar-end">
        <Link to={`/login`}>
          <button
            className={`btn btn-outline ${
              isDarkMode ? "text-white" : "text-black"
            } ml-4`}
          >
            Login
          </button>
        </Link>
        <Link to={`/register`}>
          <button
            className={`btn btn-outline ${
              isDarkMode ? "text-white" : "text-black"
            } ml-4`}
          >
            Register
          </button>
        </Link>
        <button className="ml-4" onClick={toggleTheme}>
          {isDarkMode ? (
            <IoSunnyOutline className="text-xl text-white" />
          ) : (
            <IoMoon className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
