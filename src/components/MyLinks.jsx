import React from 'react'
import {FaLinkedinIn, FaFile, FaGithub, FaGitlab} from 'react-icons/fa'


const MyLinks = () => {
    return (
        <div className='flex justify-around pt-6 max-w-[200px] w-full'>
            <a className='hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/christiantegene">
                <FaLinkedinIn className='cursor-pointer' style={{color: "#0077b5"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://gitlab.com/christiantegene">
                <FaGitlab className='cursor-pointer' style={{color: "#fc6d26"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://github.com/christiantegene">
                <FaGithub className='cursor-pointer' style={{color: "#333"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="">
                <FaFile className='cursor-pointer' style={{color: "#92B558"}} size={22}/>
            </a>
        </div>
    )
}

export default MyLinks
