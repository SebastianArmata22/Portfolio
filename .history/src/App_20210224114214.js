import './App.css'
//components
import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'
import Skills from './components/skills/Skills'
import AboutMe from './components/aboutMe/AboutMe'
import Contact from './components/contact/Contact'
import Foother from './components/foother/Foother'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainPage />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Foother />
      </footer>
    </div>
  );
}

export default App;
