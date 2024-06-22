import Sidenav from './components/Sidenav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Wave from './components/Wave'

function App() {

  return (
    <>
      <style>
        {`
          body {
            background-image: linear-gradient(to bottom, #273036, black);
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
        `}
      </style>
      {/* <div className='bg-white'>
        <Sidenav />
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Wave />
        <ContactMe />
        <Footer />
      </div> */}
    </>
  )
}

export default App
