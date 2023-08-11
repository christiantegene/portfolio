import React from 'react'
import { Carousel } from "@material-tailwind/react";
import headshotImg from '../assets/headshot.jpg'
import stamfordbridgeImg from '../assets/stamfordbridge.jpg'
import stamfordbridgeImg2 from '../assets/stamfordbridge2.jpg'
import eiffeltowerImg from '../assets/eiffeltower.jpg'
import pinchotlakeImg from '../assets/pinchotlake.jpg'
import skydivingImg from '../assets/skydiving.jpg'
import scubadivingImg from '../assets/scubadiving.jpg'


const AboutMe = () => {
    return (
        <div id='about' className='md:pl-20'>
            {/* <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="light-bg" /> */}
            <div className='max-w-[1096px] m-auto'>
                <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-gray-800'>About Me</h1>
                <div className='flex flex-col items-center md:flex-row'>
                    <img className='rounded-full w-57 h-48' src={headshotImg} alt="me" />
                    <div className="pt-3 pb-2 border border-black rounded-md">
                        <p className='h-full w-full flex flex-col p-3'>
                        Welcome! I'm Christian Tegene, a 25 year old Full-Stack developer, former medical student, and passionate problem solver embarking on an exciting career transition into the world of tech. I graduated from the University of Pittsburgh where I studied Biology and Chemistry with the goal of pursuing medicine. However, as I progressed through medical school, I realized that my true calling lies in the realm of technology. Through a combination of self-guided and structured learning and a deep exploration of computer science and programming, I have found immense joy and fulfillment in building software and solving complex technical problems. With a strong foundation in critical thinking, decision-making, and attention to detail, coupled with my background in the natural sciences, I bring a unique perspective to the field of software engineering.
                        </p>
                        <p className='h-full w-full flex flex-col p-3'>
                        Outside of the tech world, I have a diverse range of hobbies that keep me inspired and balanced. I enjoy playing soccer, piano, and chess, which allow me to channel my competitive spirit and exercise my strategic thinking skills. These activities have not only taught me discipline and perseverance but have also fostered my ability to work as part of a team and think critically in high-pressure situations. I also enjoy traveling the world. Check out some of my recent adventures below and join me as I set out on my next thrilling adventure of breaking into tech.
                        </p>
                    </div>

                </div>
                <Carousel loop={true} autoplay={true} className="rounded-xl max-w-[500px] m-auto pt-10">
                    <img
                        src={pinchotlakeImg}
                        alt="pinchot lake"
                        className="h-full w-full object-cover"
                    />
                    <div>
                        <img
                            src={stamfordbridgeImg}
                            alt="stamford bridge"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src={stamfordbridgeImg2}
                            alt="skydiving"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src={skydivingImg}
                            alt="skydiving"
                            className="h-full w-full object-cover pt-3"
                        />
                        <img
                            src={scubadivingImg}
                            alt="scuba diving"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <img
                        src={eiffeltowerImg}
                        alt="eiffel tower"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>
        </div>
    )
}

export default AboutMe
