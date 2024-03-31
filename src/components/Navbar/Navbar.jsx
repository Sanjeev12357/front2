import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return ( 
    <nav className={`bg-white transition-all duration-400 ease-linear ${open ? "h-[250px]":"h-[46px]  "}`}>
      <div className="flex flex-col p-4 mb-4 justify-center  font-medium pl-2">
       <div className="flex justify-between">
       <div  className={` z-50 gap-4   md:w-auto transition-all duration-500 ease-in-out  w-full flex justify-between`}>
       <div onClick={()=>setOpen(!open)}  className=" md:cursor-pointer  text-md relative flex font-semibold h-9 transition-all duration-1000 ease-in-out  hover:text-blue-500 " >{open ? "Close" :"Menu"}
       
       {!open?null:<div className="bg-blue-500 ml-2 absolute top-[-20px] left-[50px] transition-all duration-300 ease-linear w-[0.5px] h-16"/>}
       </div>
       {!open?<div className=" flex   justify-center gap-4">
       <div onClick={()=>setOpen(!open)}  className= "hover:text-blue-500 text-xl pt-1 transition-all duration-300 ease-linear md:cursor-pointer h-9  "><CiSearch/></div>
       <div  className= "hover:text-blue-500 pt-1 text-xl transition-all duration-300 ease-linear md:cursor-pointer h-9  "><CiLocationOn/></div>
       <div  className= "hover:text-blue-500 pt-1 text-xl transition-all duration-300 ease-linear md:cursor-pointer h-9  "><CiLocationOn/></div>
       </div>:<div className="relative">
       <div className="absolute right-2 font-semibold top-2"><CiSearch/></div>
       <input
       className="border-none text-black bg-gray-100 text-sm ml-2 px-4 py-2 h-8 focus:outline-none  w-[250px]"
       placeholder="Your Search Query"
       />
       
       </div>}

     </div>
   
     {/**
         
   
   */}
   <div className="md:block mt-[-12px]">
       <Button />
        </div>

      
        
      
        </div>

       { open ? <div className={` transition-all duration-1000 ease-in-out flex flex-col`}> 
       
       <div>
      
       <ul className="flex uppercase  items-center gap-[50px] font-[Poppins]">
       <li>
         <Link to="/" className="py-7 hover:font-bold hover:scale-105 transition-all duration-300 ease-in-out font-light px-3 ">
           Home
         </Link>
       </li>
       <NavLinks />
     </ul>
       </div>
       <div></div>
       </div>:null}
     
   
       
      </div>
    </nav>
  );
};

export default Navbar;
