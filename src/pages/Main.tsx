import React from 'react'
import Hero from './Hero'
import Header from './Header'
import Section from './Section'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'

function Main() {
  return (
    <main className='min-h-screen bg-black text-slate-200'>
        <div className="container mx-auto ">
            <Header/>
            <Hero/>
            <Skills/>
            <Experience/>
            <Projects/>
        </div>
    </main>
  )
}

export default Main