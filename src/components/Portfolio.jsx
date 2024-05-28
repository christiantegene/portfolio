import Project from './Project'
import conferencehqImg from '../assets/conferencehq.jpg'
import autonexusImg from '../assets/autonexus.jpg'
import healthgptImg from '../assets/healthgpt.jpg'

const Portfolio = () => {
    return (
        <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
            <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-gray-800'>Portfolio</h1>
            <div className='grid sm:grid-cols-1 gap-12'>
                < Project img={autonexusImg} title='AutoNexus' tagline='A dealership management platform built to help car dealerships manage their inventory, sales, and services' repo='https://gitlab.com/christiantegene/autonexus' link='https://youtu.be/JDBr79Bewj8?si=J17ahTjPGP5PxqkC'/>
                < Project img={conferencehqImg} title='ConferenceHQ' tagline='An application for event planners to organize an in-person or virtual conference from anywhere' repo='https://gitlab.com/christiantegene/conferencehq' link={null}/>
                < Project img={healthgptImg} title='HealthGPT' tagline='An application designed to help users track their caloric intake and expenditure to promote a healthy lifestyle' repo='https://gitlab.com/caloriecounters/healthgpt' link='https://www.youtube.com/watch?v=e_wNcWE5nWs' />
            </div>
        </div>
    )
}

export default Portfolio
