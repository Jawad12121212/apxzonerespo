import React from 'react'

const Nav = () => {
  return (
    <ul className='flex gap-[2vw] lg:flex-row max-sm:flex-col sm:flex-col items-center'>
      {['HOME', 'WORK', 'WHAT WE DO', 'TEAM', 'INSIGHT', 'OUR PROCESS'].map((item, i)=>(
        <li key={i} className='link cursor-pointer md:text-[2.5vw] lg:text-[1vw] '>
          {item}
        </li>
      ))}
        
    </ul>
  )
}

export default Nav
