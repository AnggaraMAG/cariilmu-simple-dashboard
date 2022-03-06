import React from "react";

const NavBar = (props: any) => {
  const { setshowNav, showNav } = props;
  return (
    <nav>
      {/* <!-- mobile menu bar --> */}
      <div className="bg-yellow-400 text-gray-100 flex justify-between md:hidden fixed w-full z-10">
        {/* <!-- logo --> */}
        <a href="#" className="block p-4 text-white font-bold">
          Cariilmu.
        </a>

        {/* <!-- mobile menu button --> */}
        <button
          className="mobile-menu-button p-4 focus:outline-none focus:bg-yellow-600"
          onClick={() => setshowNav(!showNav)}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
