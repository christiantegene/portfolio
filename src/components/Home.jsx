import MyLinks from './MyLinks'

const Home = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="light-bg" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center sm:items-center items-center'>
                    <h1 className='md:text-5xl text-2xl font-bold text-[#273036]'>Hello, my name is Christian.</h1>
                    <h2 className='md:text-3xl text-xl pt-4 text-[#273036]'>I'm a Full-Stack developer.</h2>
                    <MyLinks githubColor="333"/>
                </div>
            </div>
        </div>
    )
}

export default Home
