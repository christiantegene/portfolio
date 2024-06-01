import {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import MyLinks from './MyLinks'
import { Tooltip } from "@material-tailwind/react";

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    const mobileNavBarButton = 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
    const navBarButton = 'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
    return (
        <div>
            {nav ? (
                <RxCross2 size={35} onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            ) : (
                <AiOutlineMenu size={35} onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            )}

            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href="#home" className={mobileNavBarButton}>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav} href="#about" className={mobileNavBarButton}>
                            <BsPerson size={20} />
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a onClick={handleNav} href="#skills" className={mobileNavBarButton}>
                            <AiOutlineProject size={20} className='rotate-180' />
                            <span className='pl-4'>My Skills</span>
                        </a>
                        <a onClick={handleNav} href="#portfolio" className={mobileNavBarButton}>
                            <GrProjects size={20} />
                            <span className='pl-4'>Portfolio</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className={mobileNavBarButton}>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact Me</span>
                        </a>
                        <MyLinks />
                    </div>
                ): (
                    ''
                )
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <Tooltip content="Home" placement="right">
                        <a href="#home" className={navBarButton}>
                            <AiOutlineHome size={20} />
                        </a>
                    </Tooltip>
                    <Tooltip content="About Me" placement="right">
                        <a href="#about" className={navBarButton}>
                            <BsPerson size={20} />
                        </a>
                    </Tooltip>
                    <Tooltip content="Skills" placement="right">
                        <a href="#skills" className={navBarButton}>
                            <AiOutlineProject size={20} className='rotate-180'/>
                        </a>
                    </Tooltip>
                    <Tooltip content="Portfolio" placement="right">
                        <a href="#portfolio" className={navBarButton}>
                            <GrProjects size={20} />
                        </a>
                    </Tooltip>
                    <Tooltip content="Contact Me" placement="right">
                        <a href="#contact" className={navBarButton}>
                            <AiOutlineMail size={20} />
                        </a>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default Sidenav
