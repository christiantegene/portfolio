import React from 'react'
import cssImg from '../assets/skills/css.png'
import htmlImg from '../assets/skills/html.png'
import jsImg from '../assets/skills/javascript.png'
import reactImg from '../assets/skills/react.png'
import pythonImg from '../assets/skills/python.png'
import postgresImg from '../assets/skills/postgres.png'
import viteImg from '../assets/skills/vite.png'

import { FaDocker, FaGitAlt } from 'react-icons/fa'
import {SiDjango, SiFastapi} from 'react-icons/si'


const Skills = () => {
    return (
        <div id='skills' className='max-w-[1096px] m-auto md:pl-20 p-4 py-4'>
            <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-gray-800'>Skills</h1>
            <div className='bg-gray-800 rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 drop-shadow-2xl'>
                <div className='p-4'>
                    <img src={htmlImg} alt="html" />
                    <p className='text-center font-bold  text-white'>HTML</p>
                </div>
                <div className='p-4'>
                    <img src={cssImg} alt="css" />
                    <p className='text-center font-bold text-white'>CSS</p>
                </div>
                <div className='p-4'>
                    <img src={jsImg} alt="javascript" />
                    <p className='text-center font-bold text-white'>JavaScript</p>
                </div>
                <div className='p-4'>
                    <img src={reactImg} alt="react" />
                    <p className='text-center font-bold text-white'>React</p>
                </div>
                <div className='p-4 m-auto'>
                    <FaGitAlt size='200' style={{color: "#dd5636"}}/>
                    <p className='text-center font-bold text-white'>Git/Version control</p>
                </div>
                <div className='p-4 m-auto'>
                    <FaDocker size='200' style={{color: "#2692e8"}}/>
                    <p className='text-center font-bold text-white'>Docker</p>
                </div>
                <div className='p-4'>
                    <img src={pythonImg} alt="python"/>
                    <p className='text-center font-bold text-white'>Python</p>
                </div>
                <div className='p-4 m-auto'>
                    <SiFastapi size='200' style={{color: "#2d978c"}}/>
                    <p className='text-center font-bold text-white'>FastAPI</p>
                </div>
                <div className='p-4'>
                    <img src={postgresImg} alt="postgres" />
                    <p className='text-center font-bold text-white'>PostgreSQL</p>
                </div>
                <div className='p-4 m-auto'>
                    <SiDjango size='200' style={{color: "#43a67b"}}/>
                    <p className='text-center font-bold text-white '>Django</p>
                </div>
                <div className='p-4'>
                    <img src={viteImg} alt="postgres" />
                    <p className='text-center font-bold text-white'>Vite</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
