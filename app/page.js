'use client'
import React from 'react'
import Hero from './components/Hero'
import Project from './components/Project'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <main className='font-Gilroy px-[6vw] font-bold bg-[#c7f0f7]'>
      <Navbar/>
      <Hero/>
      <Project/>
    </main>
  )
}

export default page
