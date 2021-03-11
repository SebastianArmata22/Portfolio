import './App.css'
//components
import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'
import Skills from './components/skills/Skills'
import AboutMe from './components/aboutMe/AboutMe'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import { useRef } from 'react'

function App() {
  const refAbouMe=useRef(null)
  const refSkills=useRef(null)
  const refProjects=useRef(null)
  const refContact=useRef(null)
  return (
    <div className="App">
      <header>
        <Header reference={refAbouMe}/>
      </header>
      <main>
        <MainPage />
        <AboutMe refAbouMe={refAbouMe}/>
        <Skills refSkills={refSkills}/>
        <Projects refProjects={refProjects}/>
        <Contact refContact={refContact}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
