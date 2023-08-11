import React from 'react'
import MyLinks from './MyLinks'
import Logo from '../assets/logo.png'


const Footer = () => {
    return (
        <div className="bg-[#273036] flex justify-around">
            <MyLinks githubColor="white"/>
            <img src={Logo} alt="/" className='w-20 h-14'/>

            <p className='text-white flex items-end'>&copy;2023  Christian Tegene</p>
        </div>
    )
}

export default Footer
