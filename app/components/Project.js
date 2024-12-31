import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const data = [
    { head1: 'PROJECT 01', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
    { head1: 'PROJECT 02', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
    { head1: 'PROJECT 03', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
    { head1: 'PROJECT 04', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
    { head1: 'PROJECT 05', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
    { head1: 'PROJECT 06', head2: 'THE ULTIMATE SHOPPING EXPERIENCE', head3: 'PROJECT INFO',  head4: 'DESCRIPTION', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero qui soluta animi culpa dolor a illo commodi dolorem vitae labore! Incidunt voluptatum corporis a quia quam architecto quibusdam facere itaque saepe, fuga, dicta autem alias suscipit minima qui voluptates?' },
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    if (slideRefs.current) {
      slideRefs.current.forEach((slide, i) => {
        const offset = (i - currentIndex) * 100;
        gsap.to(slide, {
          x: `${offset}%`,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    }
  }, [currentIndex]);
  return (
    <section className='lg:h-[125vh] w-full md:h-[60vh] flex flex-col justify-between'>
      <div className="flex justify-between lg:h-[10vh] w-full items-center md:h-[5vh] max-sm:h-[5vh]">
        <h1 className='uppercase text-[1.8vw] max-sm:text-[15px] md:text-[30px]'>Selected Case Studies</h1>
        <div className="flex items-center gap-[5vw] md:gap-[100px]">
          <span onClick={() => { handlePrev() }} className='p-[1vw] rounded-xl bg-[#237FC6] cursor-pointer text-white text-[1.8vw] md:text-[30px] max-sm:text-[12px]'><FaChevronLeft /></span>
          <span onClick={() => { handleNext() }} className='p-[1vw] rounded-xl bg-[#237FC6] cursor-pointer text-white text-[1.8vw] md:text-[30px] max-sm:text-[12px]'><FaChevronRight /></span>
        </div>
      </div>
      <div className="relative lg:h-[110vh] w-full md:h-[60vh] overflow-hidden max-sm:h-[50vh] sm:h-[50vh]">
        {data.map((item, i) => (
          <div key={i} ref={(el) => (slideRefs.current[i] = el)} className="h-[110vh] w-full flex gap-[3vw]">
            <div className="lg:h-[110vh] w-[50%] max-sm:h-[31vh] sm:h-[36vh] md:h-[36vh] flex flex-wrap justify-between items-start gap-[1.61vw]">
            <div className="overflow-hidden lg:h-[71.6%] max-sm:h-[20vh] sm:h-[25vh] md:h-[25vh] w-full rounded-2xl">
                    <img className='h-full w-full object-cover object-top' src="https://i.pinimg.com/736x/fa/25/8a/fa258abdf02a626d9d6599a465e8b7c5.jpg" alt="" />
                </div>
                <div className="overflow-hidden lg:h-[25%] max-sm:h-[10vh] sm:h-[10vh] md:h-[10vh] w-[45%] rounded-2xl">
                    <img className='h-full w-full object-cover object-top' src="https://i.pinimg.com/736x/fa/25/8a/fa258abdf02a626d9d6599a465e8b7c5.jpg" alt="" />
                </div>
                <div className="overflow-hidden lg:h-[25%] max-sm:h-[10vh] sm:h-[10vh] md:h-[10vh] w-[45%] rounded-2xl">
                    <img className='h-full w-full object-cover object-top' src="https://i.pinimg.com/736x/fa/25/8a/fa258abdf02a626d9d6599a465e8b7c5.jpg" alt="" />
                </div>
            </div>
            <div className="h-full w-[50%] max-sm:h-[50vh] max-sm:w-[50%] xl:pt-[5vw]">
              <h1 className='text-[3vw] max-sm:text-[20px]'>{item.head1}</h1>
              <h2 className='text-[2vw] py-[2vw] max-sm:text-[10px]'>{item.head2}</h2>
              <h3 className='text-[1.5vw] max-sm:text-[10px]'>{item.head3}</h3>
              <div className="mt-[1vw] max-sm:text-[7px] md:text-[10px] xl:text-sm">
              <div className="flex justify-between">
                <p>Client</p>
                <p>THE ULTIMATE SHOPPING EXPERIENCE</p>
              </div>
              <div className="flex justify-between">
                <p>Year</p>
                <p>2022</p>
              </div>
              <div className="flex justify-between">
                <p>Platform</p>
                <p>THE ULTIMATE SHOPPING EXPERIENCE</p>
              </div>
              </div>
              <h4 className='text-[1.5vw] py-[1vw] max-sm:text-[10px]'>{item.head4}</h4>
              <p className='max-sm:text-[7px]'>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
