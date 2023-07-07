import React from 'react'
import MyLinks from './MyLinks'

const Footer = () => {
    return (
        <div className="bg-[#273036] flex justify-around">
            <img src="/logo.png" alt="/" className='w-20 h-14'/>
            <p className='text-white flex items-end'>&copy; 2023  Christian Tegene</p>
            <MyLinks />
        </div>
    )
}

export default Footer
