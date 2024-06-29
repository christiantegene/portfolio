import Skill from './Skill'
import htmlImg from '../assets/skills/html.png'
import cssImg from '../assets/skills/css.png'
import jsImg from '../assets/skills/javascript.png'
import reactImg from '../assets/skills/react.png'
import gitImg from '../assets/skills/git.png'
import dockerImg from '../assets/skills/docker.png'
import pythonImg from '../assets/skills/python.png'
import fastapiImg from '../assets/skills/fastapi.png'
import postgresImg from '../assets/skills/postgres.png'
import djangoImg from '../assets/skills/django.png'
import firebaseImg from '../assets/skills/firebase.png'
import viteImg from '../assets/skills/vite.png'


const Skills = () => {
    return (
        <div id='skills' className='max-w-[1096px] m-auto md:pl-20 p-4 py-4'>
            <h1 className='text-center pt-10 pb-5 sm:text-5xl text-4xl font-bold text-[#273036]'>Skills</h1>
            <div className='bg-[#273036] rounded-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 drop-shadow-2xl'>
                <Skill skillName='HTML' image={htmlImg}/>
                <Skill skillName='CSS' image={cssImg}/>
                <Skill skillName='JavaScript' image={jsImg}/>
                <Skill skillName='React' image={reactImg}/>
                <Skill skillName='Git/Version Control' image={gitImg}/>
                <Skill skillName='Docker' image={dockerImg}/>
                <Skill skillName='Python' image={pythonImg}/>
                <Skill skillName='FastAPI' image={fastapiImg}/>
                <Skill skillName='PostgreSQL' image={postgresImg}/>
                <Skill skillName='Django' image={djangoImg}/>
                <Skill skillName='Firebase' image={firebaseImg}/>
                <Skill skillName='Vite' image={viteImg}/>
            </div>
        </div>
    )
}

export default Skills
