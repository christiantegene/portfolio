import React from 'react'
import MyLinks from './MyLinks'
import Logo from '../assets/logo.png'


const Footer = () => {
    return (
        <div className="bg-black flex justify-between sm:justify-around pt-5">
            <MyLinks githubColor="white"/>
            <a href="#home"><img src={Logo} alt="/" className='w-16 h-11 sm:w-20 sm:h-14'/></a>
            <p className='text-white flex items-end'>&copy;2023  Christian Tegene</p>
        </div>
    )
}

export default Footer
