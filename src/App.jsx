import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import History from './sections/History/History'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Messages from './components/Messages/Messages'
import GalaxyBackground from './components/GalaxyBackground/GalaxyBackground'

import './App.css'

function App() {
  return (
    <>
      <GalaxyBackground />
      <Navbar />
      <Messages />

      <main>
        <Hero />
        <div className="section-divider" />

        <History />
        <div className="section-divider" />

        <Projects />
        <div className="section-divider" />

        <Contact />
      </main>
    </>
  )
}

export default App