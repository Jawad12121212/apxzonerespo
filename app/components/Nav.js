import React from 'react'

const Nav = () => {
  return (
    <ul className='flex gap-[2vw] md:flex-col xl:flex-row max-sm:flex-col max-sm:items-center md:items-center'>
      {['HOME', 'WORK', 'WHAT WE DO', 'TEAM', 'INSIGHT', 'OUR PROCESS'].map((item, i)=>(
        <li key={i} className='link cursor-pointer max-sm:text-sm md:text-[30px] xl:text-[1vw]'>
          {item}
        </li>
      ))}
        
    </ul>
  )
}

export default Nav
