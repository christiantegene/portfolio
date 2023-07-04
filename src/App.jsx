import Sidenav from './components/Sidenav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div>
        <Sidenav />
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App
