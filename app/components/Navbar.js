import React, { useRef, useState } from 'react'
import Nav from './Nav'
import { IoClose, IoMenu } from "react-icons/io5";
import gsap from 'gsap';

const Navbar = () => {
    const [icn, setIcn] = useState();
    const navRef = useRef()
    const handleIcn= ()=>{
        setIcn(!icn);
        gsap.to(navRef.current, {
            height: icn ? ('0vh') : ('40vh'),
        })
    }
    return (
        <div className="fixed top-[2%] left-[50%] z-[999] w-[85%] -translate-x-[50%] flex flex-col justify-center">
            <div className="flex items-center justify-between rounded-3xl bg-white xl:px-[1vw] max-sm:px-[10px] md:px-[20px] xl:h-[10vh] md:h-[5vh] max-sm:h-[6vh]">
                <header className='flex items-center justify-between'>
                    <h1 className='max-sm:text-[15px] md:text-[30px]'>Apxzone</h1>
                    <nav className='md:hidden xl:block max-sm:hidden ml-[3vw]'>
                        <Nav />
                    </nav>
                </header>
                <button className='px-[1vw] py-[.5vw] bg-[#237FC6] rounded-full text-white text-[1.5vw] md:hidden xl:block max-sm:hidden'>Contact Us</button>
                <span onClick={()=>{handleIcn()}} className='xl:hidden max-sm:text-[20px] md:text-[50px]'>{icn ? <IoClose /> : <IoMenu />}</span>
            </div>
            <div ref={navRef} className="absolute top-[50%] rounded-b-3xl left-0 z-[-1] h-[0vh] w-full bg-white flex justify-center items-center overflow-hidden xl:hidden">
                <nav>
                    <Nav/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
