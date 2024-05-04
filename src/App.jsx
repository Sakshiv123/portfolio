import React from 'react'
import Hero from './Component/Hero.jsx'
import Bot from './Component/Bot.jsx'
import Navbar from './Component/NavBar.jsx'
import About from './Component/About.jsx'
import Skills from './Component/Skills.jsx'
import Project from './Component/Projects.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'

const App = () => {
  return (
    <div>
      <Bot />
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App