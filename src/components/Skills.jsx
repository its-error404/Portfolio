import styled from "styled-components"

const Skills = () => {
  return (
    <MySkills id="skills">
        <div className="max-w-[1000px] flex flex-col p-4 mx-auto">
            <div>
                <p>My Skill Bank</p>
                <p>Some Technologies and Trends I am working on.. </p>
            </div>
            
            <div className="border border-red-500">
                <div className="flex items-stretch justify-center p-4 cursor-pointer">
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/favicon.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/Kali-dragon-icon.svg.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/png-transparent-owasp-top-10-webscarab-application-security-computer-security-richard-stallman-logo-electric-blue-vulnerability.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/Tux.svg.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/HTML5.svg.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/CSS.svg"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/JavaScript-Symbol.png"></img>
                    <img className="w-20 mx-auto" src="/src/assets/images/icons/React-icon.svg.png"></img>
                </div>
            </div>
        </div>
        
    </MySkills>
  )
}

const MySkills = styled.div``
export default Skills
