import cssImg from '../assets/skills/css.png'
import htmlImg from '../assets/skills/html.png'
import jsImg from '../assets/skills/javascript.png'
import reactImg from '../assets/skills/react.png'
import pythonImg from '../assets/skills/python.png'
import postgresImg from '../assets/skills/postgres.png'
import viteImg from '../assets/skills/vite.png'
import dockerImg from '../assets/skills/docker.png'
import gitImg from '../assets/skills/git.png'
import fastapiImg from '../assets/skills/fastapi.png'
import djangoImg from '../assets/skills/django.png'
import firebaseImg from '../assets/skills/firebase.png'


const Skills = () => {
    return (
        <div id='skills' className='max-w-[1096px] m-auto md:pl-20 p-4 py-4'>
            <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-[#273036]'>Skills</h1>
            <div className='bg-[#273036] rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 drop-shadow-2xl'>
                <div className='p-4'>
                    <img src={htmlImg} alt="html" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>HTML</p>
                </div>
                <div className='p-4'>
                    <img src={cssImg} alt="css" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>CSS</p>
                </div>
                <div className='p-4'>
                    <img src={jsImg} alt="javascript" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>JavaScript</p>
                </div>
                <div className='p-4'>
                    <img src={reactImg} alt="react" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>React</p>
                </div>
                <div className='p-4'>
                    <img src={gitImg} alt="git" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Git/Version Control</p>
                </div>
                <div className='p-4'>
                    <img src={dockerImg} alt="docker" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Docker</p>
                </div>
                <div className='p-4'>
                    <img src={pythonImg} alt="python" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Python</p>
                </div>
                <div className='p-4'>
                    <img src={fastapiImg} alt="fastapi" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>FastAPI</p>
                </div>
                <div className='p-4'>
                    <img src={postgresImg} alt="postgres" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>PostgreSQL</p>
                </div>
                <div className='p-4'>
                    <img src={djangoImg} alt="django" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Django</p>
                </div>
                <div className='p-4'>
                    <img src={firebaseImg} alt="firebase" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Firebase</p>
                </div>
                <div className='p-4'>
                    <img src={viteImg} alt="vite" className='hover:scale-105 ease-in duration-100' />
                    <p className='text-center font-bold text-white/90 pt-2'>Vite</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
