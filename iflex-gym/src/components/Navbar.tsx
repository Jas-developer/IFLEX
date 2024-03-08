import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";

type navOpen = true | false;

export default function Navbar() {
  const [openNav, setOpenNav] = useState<navOpen>(false);

  return (
    <>
      {/* for large screens */}
      <nav className=" hidden lg:flex justify-between py-4 items-center lg:py-8">
        <Link to="#home">
          <span className="lg:text-4xl font-serif font-semibold text-red-600">
            IFLEX GYM
          </span>
        </Link>
        <ul className="flex flex-row  lg:gap-6">
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#services">Services</Link>
          <Link to="#contact">Contact</Link>
        </ul>
      </nav>
      {/* for small screens */}
      <div className="md:hidden">
        {openNav ? (
          <nav className=" md:hidden flex items-start flex-col py-4 justify-between  lg:py-8">
            <Link to="#home" className="flex-row flex justify-between w-full">
              <span className="lg:text-4xl font-serif font-semibold text-red-600">
                IFLEX GYM
              </span>
              <button
                onClick={() => setOpenNav(openNav === true ? false : true)}
              >
                Close
              </button>
            </Link>
            <ul className="flex lg:hidden flex-col  lg:gap-6">
              <Link to="#home">Home</Link>
              <Link to="#about">About</Link>
              <Link to="#services">Services</Link>
              <Link to="#contact">Contact</Link>
            </ul>
          </nav>
        ) : (
          <div className="flex justify-between items-center py-4">
            <span className="lg:text-4xl font-serif font-semibold text-red-600">
              IFLEX GYM
            </span>
            <button
              onClick={() => setOpenNav(openNav === false ? true : false)}
            >
              Open
            </button>
          </div>
        )}
      </div>
    </>
  );
}
