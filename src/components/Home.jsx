import { TypeAnimation } from "react-type-animation"
import styled from "styled-components"
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord  } from 'react-icons/fa'
import { BiLogoMedium } from 'react-icons/bi'
import { Icon } from '@iconify/react'
import '/animations.css'

const Home = () => {
  return (
    <HomePage id="home">
        <img className="object-cover object-right w-full h-screen scale-x-1 bg-gradient-to-t from-black" src="/src/assets/images/background.jpg" alt=""></img>
        <BackgroundFade className="absolute top-0 left-0 w-full h-screen bg-white/10">
          <CenterIntro className="flex flex-col items-center justify-center w-full h-full max-w-3xl m-auto lg:items-start">
            <IntroText>

              <Heading className="text-4xl font-semibold text-gray-800 sm:text-5xl font-Poppins animate">Hi, This is Tech Monkey,</Heading>
                {/* <div className="text-2xl sm:text-3xl"> */}
                  <TypeAnimation
                  className="flex justify-center pt-2 text-3xl sm:text-4xl"
                  sequence={[ 'An Ethical Hacker',1000, 'A Web Developer',1000, 'A CTF Player',1000, 'A Tech Enthusiast',1000, 'A Blogger',1000 ]}
                  speed={60}
                  wrapper={'div'}
                  repeat={Infinity}
                  cursor={true}
                  >
                </TypeAnimation>
        
            </IntroText>

            <SocialMedia className="flex justify-between pt-6 lg:ml-32 max-w-[250px] w-full md:mr-10">
                <a href="https://tryhackme.com/p/vampy"><Icon icon="simple-icons:tryhackme" fontSize={40} className="cursor-pointer"/></a>
                <a href="https://github.com/its-error404"><FaGithub size={30} className="cursor-pointer"/></a>
                <a href="https://www.instagram.com/the_tech_monkey_/"><FaInstagram size={30} className="cursor-pointer"/></a>
                <a href="https://www.linkedin.com/in/karthikeyan-a-4137231bb/"><FaLinkedin size={30} className="cursor-pointer"/></a>
                <a href="https://discordapp.com/users/655824007345602561"><FaDiscord size={30} className="cursor-pointer"/></a>
                <a href="https://medium.com/@karthiben16"><BiLogoMedium size={30}  className="cursor-pointer"/></a>
            </SocialMedia>
            
          </CenterIntro>
        </BackgroundFade>
    </HomePage>
  )
}

const HomePage = styled.div``
const BackgroundFade = styled.div``
const IntroText = styled.div``
const SocialMedia = styled.div``
const CenterIntro = styled.div``
const Heading = styled.div``
export default Home
