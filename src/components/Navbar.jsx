import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Samir&apos;s Travel Agency</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
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
          <li>
            <button className="ml-4" onClick={toggleTheme}>
              {isDarkMode ? (
                <IoSunnyOutline className="text-xl text-white" />
              ) : (
                <IoMoon className="text-xl" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
