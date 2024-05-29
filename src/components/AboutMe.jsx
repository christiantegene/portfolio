/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "@material-tailwind/react";
import headshotImg from '../assets/headshot.jpg'
import stamfordbridgeImg from '../assets/stamfordbridge.jpg'
import stamfordbridgeImg2 from '../assets/stamfordbridge2.jpg'
import eiffeltowerImg from '../assets/eiffeltower.jpg'
import pinchotlakeImg from '../assets/pinchotlake.jpg'
import skydivingImg from '../assets/skydiving.jpg'
import scubadivingImg from '../assets/scubadiving.jpg'
import colosseumImg from '../assets/colosseum.png'

const AboutMe = () => {
    const welcomeMessageParagraph1 = 'Welcome! I\'m Christian Tegene, a full-stack developer, former medical student, and passionate problem solver embarking on an exciting career transition into the world of tech. I graduated from the University of Pittsburgh where I studied Biology and Chemistry with the goal of pursuing medicine. However, as I progressed through medical school, I realized that my true calling lies in the realm of technology. Through a combination of self-guided and structured learning and a deep exploration of computer science and programming, I have found immense joy and fulfillment in building software and solving complex technical problems. With a strong foundation in critical thinking, decision-making, and attention to detail, coupled with my background in the natural sciences, I bring a unique perspective to the field of software engineering.'
    const welcomeMessageParagraph2 = 'Outside of the tech world, I have a diverse range of hobbies that keep me inspired and balanced. I enjoy playing soccer, piano, and chess, which allow me to channel my competitive spirit and exercise my strategic thinking skills. These activities have not only taught me discipline and perseverance but have also fostered my ability to work as part of a team and think critically in high-pressure situations. I also enjoy traveling the world. Check out some of my recent adventures and join me as I set out on my next thrilling adventure of breaking into tech.'

    return (
        <div id='about' className='md:pl-20 bg-[#273036]'>
            <div className='max-w-[1096px] m-auto'>
                <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-[#d5a264]'>About Me</h1>
                <div className='flex flex-col items-center lg:flex-row'>

                    <div className="pt-3 pb-2 w-[100%] md:pr-3">
                        <div className='flex justify-center pb-3'>
                            <img className='rounded-full w-57 h-48 border-2 border-[#d5a264]' src={headshotImg} alt="me" />
                        </div>
                        <div className='sm:border-2 border-[#d5a264] rounded-lg'>
                            <p className='h-full w-full flex flex-col p-3 text-white/90'>
                                {welcomeMessageParagraph1}
                            </p>
                            <p className='h-full w-full flex flex-col p-3 text-white/90'>
                                {welcomeMessageParagraph2}
                            </p>
                        </div>

                    </div>
                    <Carousel loop={true} autoplay={true} transition={{ duration: 1.5 }} className="rounded-xl max-w-[500px] m-auto pt-20">
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
                    <img
                        src={colosseumImg}
                        alt="colosseum"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={eiffeltowerImg}
                        alt="eiffel tower"
                        className="h-full w-full object-cover"
                    />
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
                </Carousel>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
