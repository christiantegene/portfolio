import React from 'react'
import MyLinks from './MyLinks'
import Logo from '../assets/logo.png'


const Footer = () => {
    return (
        <div className="bg-black flex justify-between sm:justify-around pt-5 pb-0">
            <a href="#home"><img src={Logo} alt="/" className='w-24 h-16'/></a>
            <div>
                <MyLinks githubColor="white"/>
                <p className='text-white py-2'>&copy;2023  Christian Tegene</p>
            </div>

        </div>
    )
}

export default Footer
