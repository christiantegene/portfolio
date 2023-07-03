import React from 'react'

const ContactMe = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            {/* <div className='w-full h-screen'> */}
                <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-gray-800'>Contact Me</h1>
                <form action="https://getform.io/f/08f3b415-570e-43eb-88ae-bf7ef6a73e31" method='POST' encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className='uppercase text-sm py-2'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm py-2'>PHONE (Optional)</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone'/>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="10" name='message'></textarea>
                        </div>
                        <button className='bg-black hover:bg-orange-800 text-gray-100 mt-4 w-full p-4 rounded-lg'>
                            Send Message
                        </button>
                    </div>
                </form>
            {/* </div> */}
        </div>
    )
}

export default ContactMe
