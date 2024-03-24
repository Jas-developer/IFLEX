import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { motion } from "framer-motion";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiAlignLeft } from "react-icons/tfi";
type navOpen = true | false;

export default function Navbar() {
  const [openNav, setOpenNav] = useState<navOpen>(false);

  return (
    <>
      {/* for large screens */}
      <nav className=" hidden lg:flex justify-between py-4 items-center lg:py-8">
        <Link to="#home">
          <span className="lg:text-4xl font-serif font-semibold text-white">
            IFLEX FITNESS GYM
          </span>
        </Link>
        <ul className="flex flex-row  lg:gap-6 text-white font-serif text-[16px] font-medium uppercase">
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#services">Services</Link>
          <Link to="#contact">Contact</Link>
        </ul>
      </nav>
      {/* for small screens */}
      <div className="md:hidden ">
        {openNav ? (
          <nav className=" md:hidden flex items-end flex-col py-4 relative justify-between lg:py-8 ">
            <Link to="#home" className="flex-row flex justify-between w-full">
              <span className="lg:text-4xl font-serif font-semibold text-red-600">
                IFLEX GYM
              </span>
              <button
                onClick={() => setOpenNav(openNav === true ? false : true)}
                className="transition ease-in-out delay-150 rounded-tl-xl rounded-br-xl hover:-translate-y-1 hover:scale-90 flex items-center justify-center  duration-300 w-[2rem] h-[2rem] bg-red-400 "
              >
                <TfiAlignLeft width={500} height={200} />
              </button>
            </Link>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex absolute top-14 w-[50%] py-2 lg:hidden gap-4 rounded-br-[2rem] rounded-tl-[2rem] text-white flex-col justify-end items-center  lg:gap-6 bg-green-400"
            >
              <Link to="#home">Home</Link>
              <Link to="#about">About</Link>
              <Link to="#services">Services</Link>
              <Link to="#contact">Contact</Link>
            </motion.div>
          </nav>
        ) : (
          <div className="flex justify-between items-center py-4">
            <span className="lg:text-4xl font-serif font-semibold text-red-600">
              IFLEX GYM
            </span>
            <button
              onClick={() => setOpenNav(openNav === false ? true : false)}
              className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-tl-xl rounded-br-xl hover:scale-110 flex items-center justify-center duration-300 w-[2rem] h-[2rem] bg-red-400"
            >
              <TfiAlignJustify />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
