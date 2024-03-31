import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, showMenu] = useState(false);

  const variants = {
    open: { height: "auto", transition: { delay:0.4,duration: 1, ease: "easeInOut" } },
    closed: { height: "20px", transition: {delay:0.4,duration: 1, ease: "easeInOut" } },
  };

  return (
    <div>
      <nav className={`bg-white`}>
        <div className="flex flex-col py-6 px-6 p-4 mb-4 justify-center  font-medium pl-2">
          <div className="flex justify-between">
            <motion.div
              className={`z-50 gap-4 md:w-auto w-full flex justify-between`}
              initial={false}
              animate={open ? "open" : "closed"}
              variants={variants}
            >
              <motion.div
                onClick={() => setOpen(!open)}
                className="md:cursor-pointer text-md relative flex font-semibold h-9 transition-all duration-1000 ease-in-out hover:text-blue-500 "
              >
                {open ? "Close" : "Menu"}
                {!open ? null : (
                  <div className="bg-blue-500 ml-2 absolute top-[-20px] left-[50px] transition-all duration-300 ease-linear w-[0.5px] h-16" />
                )}
              </motion.div>
              {!open ? (
                <div className=" flex justify-center gap-4">
                  <motion.div
                    onClick={() => setOpen(!open)}
                    className="hover:text-blue-500 text-xl pt-1 transition-all duration-300 ease-linear md:cursor-pointer h-9  "
                  >
                    <CiSearch />
                  </motion.div>
                  <motion.div
                    className="hover:text-blue-500 pt-1 text-xl transition-all duration-300 ease-linear md:cursor-pointer h-9  "
                  >
                    <CiLocationOn />
                  </motion.div>
                  <motion.div
                    className="hover:text-blue-500 pt-1 text-xl transition-all duration-300 ease-linear md:cursor-pointer h-9  "
                  >
                    <CiLocationOn />
                  </motion.div>
                </div>
              ) : (
                <div className="relative">
                  <motion.div className="absolute right-2 font-semibold top-2">
                    <CiSearch />
                  </motion.div>
                  <input
                    className="border-none text-black bg-gray-100 text-sm ml-2 px-4 py-2 h-8 focus:outline-none  w-[220px]"
                    placeholder="Your Search Query"
                  />
                </div>
              )}
            </motion.div>

            <div className="md:block mt-[-12px]">
              <Button />
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                className={`transition-all duration-1000 ease-in-out`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <ul className="flex mt-10 md:mt-2  flex-col md:flex-row uppercase items-center gap-[50px]">
                    <li>
                      <Link
                        to="/"
                        className="py-7 hover:font-bold hover:scale-105 transition-all duration-300 ease-in-out font-light px-3"
                      >
                        Home
                      </Link>
                    </li>
                    <NavLinks />
                  </ul>
                </div>
                <div></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {!menu ? null : <div>nav</div>}
    </div>
  );
};

export default Navbar;
