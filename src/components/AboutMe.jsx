import React from 'react'
import MyLinks from './MyLinks'
import { Carousel } from "@material-tailwind/react";
import headshotImg from '../assets/headshot.jpg'



const AboutMe = () => {
    return (
        <div id='about' className='md:pl-20'>
            {/* <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="light-bg" /> */}
            <div className='max-w-[1096px] m-auto'>
                <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-gray-800'>About Me</h1>
                <div className='flex flex-col items-center md:flex-row'>
                    <img className='rounded-full w-57 h-48' src={headshotImg} alt="me" />
                    <div>
                        <p className='h-full w-full flex flex-col justify-center'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aliquid suscipit, praesentium recusandae eligendi error quod odit harum temporibus facere tempora obcaecati exercitationem laudantium blanditiis nulla voluptate consequuntur alias itaque.
                        Autem saepe alias repudiandae accusantium odio est excepturi aliquam inventore quam accusamus. Eos accusantium iste explicabo beatae veritatis, fugiat facere sapiente atque nihil eveniet reprehenderit porro optio fuga laborum ipsum.
                        Sapiente rem harum temporibus dicta, consequatur neque porro accusantium deleniti fuga repellendus voluptates at? Itaque accusamus esse ullam amet. Magnam dignissimos aliquam ducimus eius recusandae sequi sed, libero incidunt ullam.
                        Nulla, animi? Iusto ullam rem, explicabo impedit rerum eaque ipsam soluta deleniti odit aut quisquam cum est? Eveniet laudantium corporis, tempore cupiditate ipsum quidem. Accusantium, quia? Facilis assumenda quibusdam perferendis.
                        </p>
                    </div>

                </div>
                <Carousel className="rounded-xl max-w-[500px] m-auto">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    {/* <img
                        src="https://www.spaza.se/wp-content/uploads/woocommerce-placeholder.png"
                        alt=""
                        className="h-full w-full object-cover"
                    /> */}
                </Carousel>
                {/* <div className='flex justify-around'>
                    <MyLinks />
                </div> */}
            </div>


        </div>
    )
}

export default AboutMe
