import { useState } from "react";
import styled from "styled-components";

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { GrProjects, GrAchievement } from "react-icons/gr";
import {BsPersonVcard} from 'react-icons/bs'
import {FiSmartphone} from 'react-icons/fi'


const Navbar = () => {
  const [Navbar, setNavbar] = useState(false);

  const DisplayNav = () => {
    setNavbar(!Navbar)
  };

  return (
    
    <NavigationBar>
      
      <AiOutlineMenu
        onClick={()=>DisplayNav()}
        className="absolute cursor-pointer z-[99] right-4 top-4 md:hidden"
        size={20}
      />
      { Navbar ? (
        <SideNavIcons className="fixed z-[100] flex flex-col items-center justify-center w-full h-full p-8 text-center md:hidden bg-slate-400">
          <a
            href="#home"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black transition"
          >
            <AiOutlineHome size={25}></AiOutlineHome>
            <span className="pl-4 font-montserrat-regular">Home</span>
          </a>
          <a
            href="#skills"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <GrAchievement className="" color="white" size={25}></GrAchievement>
            <span className="pl-4 font-montserrat-regular">Skills</span>
          </a>
          <a
            href="#projects"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <GrProjects size={25}></GrProjects>
            <span className="pl-4 font-montserrat-regular">Projects</span>
          </a>
          <a
            href="#resume"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <BsPersonVcard size={25}></BsPersonVcard>
            <span className="pl-4 font-montserrat-regular">Resume</span>
          </a>
          <a
            href="#contact"
            className="m-2.5 flex justify-center shadow-lg w-[75%] p-4 rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <FiSmartphone size={25}></FiSmartphone>
            <span className="pl-4 font-montserrat-regular">Contact</span>
          </a>
        </SideNavIcons>
      ) : (
        ""
      )}

      <MainNavIcons className="fixed hidden md:block top-[25%] z-50">
        <div className="flex flex-col p-4">
        <a
            href="#home"
            className="m-2.5 p-4 flex justify-center shadow-lg w-[75%] rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black transition top-[25%]"
          >
            <AiOutlineHome size={25}></AiOutlineHome>
          </a>
          <a
            href="#skills"
            className="m-2.5 flex justify-center shadow-lg p-4 w-[75%] rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <GrAchievement size={25}></GrAchievement>
          
          </a>
          <a
            href="#projects"
            className="m-2.5 flex justify-center shadow-lg p-4 w-[75%] rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <GrProjects size={25}></GrProjects>
           
          </a>
          <a
            href="#resume"
            className="m-2.5 flex justify-center shadow-lg p-4 rounded-full w-[75%] shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <BsPersonVcard size={25}></BsPersonVcard>

          </a>
          <a
            href="#contact"
            className="m-2.5 flex justify-center shadow-lg p-4 w-[75%] rounded-full shadow-gray-400 hover:scale-110 duration-300 bg-white/80 text-black"
          >
            <FiSmartphone size={25}></FiSmartphone>
          </a>
        </div>
      </MainNavIcons>
      
    </NavigationBar>
  );
};


const NavigationBar = styled.div``
const SideNavIcons = styled.div``
const MainNavIcons = styled.div``

export default Navbar;
