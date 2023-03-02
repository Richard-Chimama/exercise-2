import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import { Section } from './component/Section'


function App() {
  

  return (
    <div className="App">
      <Hero />
      <Section title="Portofolio" styled={{backgroundColor:"pink"}} />
      <Section title="About" styled={{backgroundColor:"beige"}} />
      <Section title="Contact" styled={{backgroundColor:"tomato"}} />
      </div>
  )
}

export default App
