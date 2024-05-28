import {FaLinkedinIn, FaFile, FaGithub, FaGitlab} from 'react-icons/fa'

//style={{color: "#333"}}
const MyLinks = ({ githubColor }) => {
    return (
        <div className='flex justify-around pt-5 max-w-[200px] w-full'>
            <a className='hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/in/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='cursor-pointer' style={{color: "#0077b5"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://gitlab.com/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaGitlab className='cursor-pointer' style={{color: "#fc6d26"}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://github.com/christiantegene" target="_blank" rel="noopener noreferrer">
                <FaGithub className='cursor-pointer' style={{color: githubColor}} size={25}/>
            </a>
            <a className='hover:scale-110 ease-in duration-300' href="https://docs.google.com/document/d/1zInkGiPnyg6GfB5pdMf-PqB7jT6-2r76DqA_Lsg12rU/edit" target="_blank" rel="noopener noreferrer">
                <FaFile className='cursor-pointer' style={{color: "#92B558"}} size={22}/>
            </a>
        </div>
    )
}

export default MyLinks
