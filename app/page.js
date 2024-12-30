'use client'
import React from 'react'
import Hero from './components/Hero'
import Project from './components/Project'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <main className='font-Gilroy px-[6vw] font-bold sm:bg-blue-700 md:bg-green-700 lg:bg-red-700 xl:bg-yellow-700 2xl:bg-purple-700 bg-slate-700'>
      <Navbar/>
      <Hero/>
      <Project/>
    </main>
  )
}

export default page
