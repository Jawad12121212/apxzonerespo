'use client'
import React, { useRef, useState } from 'react'
import Nav from './Nav'
import { IoClose, IoMenu } from "react-icons/io5";
import gsap from 'gsap';

const Navbar = () => {
    const [icn, setIcn] = useState();
    const navRef = useRef()
    const handleIcn = () => {
        setIcn(!icn);
        gsap.to(navRef.current, {
            height: icn ? ('0vh') : ('60vh'),
        })
    }
    return (
        <div className="fixed top-[2%] left-[50%] z-[999] w-[90%] -translate-x-[50%] flex flex-col justify-center font-Gilroy font-bold">
            <header className='lg:h-[10vh] w-full rounded-xl max-sm:h-[6vh] sm:h-[6vh] bg-zinc-200 flex justify-between items-center px-[2vw]'>
                <div className="flex gap-[5vw] items-center">
                    <h1 className='lg:text-[2vw] max-sm:text-[5vw] sm:text-[3vw]'>apxzone</h1>
                    <nav className='lg:block max-sm:hidden sm:hidden md:hidden'>
                        <Nav />
                    </nav>
                </div>
                <button className='lg:block max-sm:hidden sm:hidden px-[1vw] py-[.5vw] bg-[blue] text-white rounded-full'>Contact us</button>
                <span onClick={()=>{handleIcn()}} className='lg:hidden sm:block max-sm:block md:text-[4vw]'>{icn ? <IoClose /> : <IoMenu />}</span>
            </header>
            <div ref={navRef} className="flex justify-center items-center bg-zinc-200 h-[0vh] w-full overflow-hidden lg:hidden">
                <nav>
                    <Nav/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
