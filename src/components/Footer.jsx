import MyLinks from './MyLinks'
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className="bg-black flex justify-around pt-5 pb-0">
            <a href="#home"><img src={Logo} alt="/" className='w-24 h-16'/></a>
            <div>
                <MyLinks githubColor="white"/>
                <p className='text-white/90 py-2'>&copy;2024  Christian Tegene</p>
            </div>

        </div>
    )
}

export default Footer
