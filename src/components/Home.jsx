import React from 'react'
import {FaLinkedinIn, FaFile, FaGithub, FaGitlab} from 'react-icons/fa'

const Home = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="laptop" />
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1553526777-5ffa3b3248d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="laptop" />

            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hello, my name is Christian.</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a full-stack developer.</h2>
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

                </div>
            </div>
        </div>
    )
}

export default Home
