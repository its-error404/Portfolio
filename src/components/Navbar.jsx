import { useState } from "react";

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { GrProjects, GrAchievement } from "react-icons/gr";
import {BsPersonVcard} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);

  const DisplayNav = () => {
    setNavbar(!Navbar);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={DisplayNav}
        className="absolute z-50 transition duration-300 ease-in-out cursor-pointer top-4 right-4 animate-bounce"
        size={20}
      />
      {Navbar ? (
        <div className="fixed z-40 flex flex-col items-center justify-center w-full h-full p-2 text-center bg-color-back ">
          <a
            href="#home"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-200 bg-white/80 text-black transition"
          >
            <AiOutlineHome size={25}></AiOutlineHome>
            <span className="pl-4 font-montserrat-regular">Home</span>
          </a>
          <a
            href="#skills"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-200 bg-white/80 text-black"
          >
            <GrAchievement className="" color="white" size={25}></GrAchievement>
            <span className="pl-4 font-montserrat-regular">Skills</span>
          </a>
          <a
            href="#projects"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-200 bg-white/80 text-black"
          >
            <GrProjects size={25}></GrProjects>
            <span className="pl-4 font-montserrat-regular">Projects</span>
          </a>
          <a
            href="#resume"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-200 bg-white/80 text-black"
          >
            <BsPersonVcard size={25}></BsPersonVcard>
            <span className="pl-4 font-montserrat-regular">Resume</span>
          </a>
          <a
            href="#contact"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-200 bg-white/80 text-black"
          >
            <FiSmartphone size={25}></FiSmartphone>
            <span className="pl-4 font-montserrat-regular">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block">
        <div className="flex flex-col p-4 flex-nowrap">
          <a href="#home" className="fixed p-4 m-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400 top-[22%] z-50 ease-in transit">
            <AiOutlineHome size={30} />
          </a>
          <a href="#skills" className="fixed p-4 m-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400 top-[32%] z-50">
            <GrAchievement size={30} />
          </a>
          <a href="#projects" className="fixed p-4 m-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400 top-[42%] z-50">
            <GrProjects size={30} />
          </a>
          <a href="#resume" className="fixed p-4 m-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400 top-[52%] z-50"> 
            <BsPersonVcard size={30} />
          </a>
          <a href="#contact" className="fixed p-4 m-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400 top-[62%] z-50">
            <FiSmartphone size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
