import { NavLink } from "react-router-dom";
const Nab = () => {
  return (
    <div>
      <div className="navbar bg-base-100  fixed z-10 pr-0 md:pr-20 pl-0 md:pl-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl items-center justify-center "
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/books"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Pages to Read
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Review
              </NavLink>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Our Writer
              </NavLink>
              {/* <li>
              <a>Item 4</a>
            </li>
            <li>
              <a>Item 5</a>
            </li> */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-4xl font-bold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl items-center justify-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                  : "text-xl mr-8 font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                  : "text-xl mr-8 font-bold"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1  border-[#23BE0A] text-[#23BE0A] font-bold"
                  : "text-xl mr-8 font-bold"
              }
            >
              Pages to Read
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1  border-[#23BE0A] text-[#23BE0A] font-bold"
                  : "text-xl mr-8 font-bold"
              }
            >
              Review
            </NavLink>
            <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl mr-8 shadow-lg shadow-emerald-500 border-1 border-[#23BE0A] text-[#23BE0A] font-bold"
                    : "text-xl mr-8 font-bold"
                }
              >
                Our Writer
              </NavLink>
            {/* <li>
              <a>Item 4</a>
            </li>
            <li>
              <a>Item 5</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-3 text-white bg-[#23BE0A]">Sign In</a>
          <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nab;
