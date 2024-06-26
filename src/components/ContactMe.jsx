const ContactMe = () => {
    return (
        <div className='bg-gradient-to-b from-[#273036] to-[#273036]'>
            <div id='contact' className='bg-gradient-to-b from-[#273036] to-[#273036] max-w-[1040px] px-5 m-auto md:pl-20 pb-5'>
                <h1 className='text-center py-6 sm:text-5xl text-4xl font-bold text-[#d5a264]'>Contact Me</h1>
                <form action="https://getform.io/f/08f3b415-570e-43eb-88ae-bf7ef6a73e31" method='POST' encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-4 w-full'>
                        <div className='flex flex-col'>
                            <label className='text-sm text-[#d5a264] py-2'>Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name'/>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-[#d5a264] py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email'/>
                        </div>
                    </div>
                    <div>

                        <div className='flex flex-col py-2'>
                            <label className='text-sm text-[#d5a264] py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='text-sm text-[#d5a264] py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="10" name='message'></textarea>
                        </div>
                        <button className='border border-[#d5a264] text-white/90 hover:bg-[#d5a264] hover:text-black mt-4 w-full p-4 rounded-lg'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
