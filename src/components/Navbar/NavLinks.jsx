import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  const [heading,setHeading] = useState(null);
 

  return (
    <>
      <div className="md:flex hidden relative flex-col mt-[50px] items-center justify-between">
      <div className="flex flex-col items-center justify-center md:flex-row mb-[20px]">
      {links.map((link,i) => (

        <div  onClick={()=>setHeading(i + 1)} className="font-light text-lg mr-8 hover:font-semibold duration-300 cursor-pointer ease-in-out transition-all hover:scale-105">
        {link.name}
       
        </div>
      ))}
      </div>
      <div className="flex ">
        {links.map((link,i) => (
          <div
          className="flex absolute left-0 h-[100px]"
          >
          {link.id === heading ? link.sublinks.map((sublink) => (
            <div className="mr-4 font-extralight hover:text-blue-500 duration-300 transition-all ease-in-out">
            {sublink.Head}
            </div>
          )) : null}
          </div>
        ))}
      </div>
      </div>

      <div className="md:hidden flex">
      <div className="flex flex-col items-center justify-center w-full">
        {links.map((link, i) => (
          <div
            key={i}
            onClick={() => setHeading(heading === i ? null : i)}
            className="font-light text-lg mr-8 mb-2 cursor-pointer hover:font-semibold duration-300 ease-in-out transition-all hover:scale-105"
          >
            <div className="flex items-center justify-between w-full">
              {link.name}
              <IoIosArrowDown
                className={`transform ${
                  heading === i ? "rotate-180" : ""
                } transition-transform`}
              />
            </div>
            {heading === i && (
              <div className="flex cursor-pointer flex-col ml-6 mt-2">
                {link.sublinks.map((sublink, j) => (
                  <div
                    key={j}
                    className="font-extralight  cursor-pointer hover:text-blue-500 duration-300 transition-all ease-in-out"
                  >
                    {sublink.Head}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NavLinks;
