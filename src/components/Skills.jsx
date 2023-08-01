import styled from "styled-components";

const Skills = () => {
  return (
    <MySkills id="skills" className="bg-[#0F1829] ">
      <div className="max-w-[1500px] flex flex-col p-4 mx-auto text-white">
        <div>
          <p className="inline text-5xl font-semibold tracking-wide border-b-4 border-red-500 font-Poppins">
            My Skill Bank
          </p>
          <p className="pt-6 text-3xl font-bold font-Roboto-condensed">
            Some Technologies and Trends I am working on..{" "}
          </p>
        </div>

        <div className="w-[1500px] gap-4 pt-4 flex mt-4 justify-start">
          <div className="grid grid-cols-4 p-4 cursor-pointer images">
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/favicon.png"
              ></img>
              <p className="pt-4 pl-16">
                TryHackMe <span className="pl-1">(CTF Player) </span>
              </p>
            </div>
            <div>
              <img
                className="w-24 mx-auto"
                src="/src/assets/images/icons/Kali-dragon-icon.svg.png"
              ></img>
              <p className="pt-4 ">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/msf.png"
              ></img>
              <p className="pt-4 ">TryHackMe</p>
            </div>
            <div className="">
              <img
                className="w-24 mx-auto"
                src="/src/assets/images/icons/OWASP.png"
              ></img>
              <p className="pt-4">OWASP Framework</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/Tux.svg.png"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/HTML5.svg.png"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/CSS.svg"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/JavaScript-Symbol.png"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/React-icon.svg.png"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
            <div>
              <img
                className="w-20 mx-auto"
                src="/src/assets/images/icons/tailwind-css-icon.png"
              ></img>
              <p className="pt-4">TryHackMe</p>
            </div>
          </div>
        </div>
      </div>
    </MySkills>
  );
};

const MySkills = styled.div`
background-color: #0cbaba;
background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
`;
export default Skills;

