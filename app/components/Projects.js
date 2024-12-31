import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const data = [
    { img: ['https://i.pinimg.com/736x/fb/93/65/fb93657bff41b10c1727c56eb5cbc3ec.jpg', 'https://i.pinimg.com/736x/cb/64/a6/cb64a6dda8deda76d0f1d1323ba4a57f.jpg', 'https://i.pinimg.com/736x/0c/05/14/0c051456b838be1a1190500ac9399456.jpg'], h1: 'Project 01', h2: 'The Ultimate Shopping Experience', h3: 'Prject Info', h4: 'Description', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum laboriosam dignissimos molestias maxime corporis dolores ad similique, libero ducimus id error aliquam praesentium ipsum quibusdam adipisci temporibus, aperiam accusamus.' },
    { img: ['https://i.pinimg.com/736x/fb/93/65/fb93657bff41b10c1727c56eb5cbc3ec.jpg', 'https://i.pinimg.com/736x/cb/64/a6/cb64a6dda8deda76d0f1d1323ba4a57f.jpg', 'https://i.pinimg.com/736x/0c/05/14/0c051456b838be1a1190500ac9399456.jpg'], h1: 'Project 02', h2: 'The Ultimate Shopping Experience', h3: 'Prject Info', h4: 'Description', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum laboriosam dignissimos molestias maxime corporis dolores ad similique, libero ducimus id error aliquam praesentium ipsum quibusdam adipisci temporibus, aperiam accusamus.' },
    { img: ['https://i.pinimg.com/736x/fb/93/65/fb93657bff41b10c1727c56eb5cbc3ec.jpg', 'https://i.pinimg.com/736x/cb/64/a6/cb64a6dda8deda76d0f1d1323ba4a57f.jpg', 'https://i.pinimg.com/736x/0c/05/14/0c051456b838be1a1190500ac9399456.jpg'], h1: 'Project 03', h2: 'The Ultimate Shopping Experience', h3: 'Prject Info', h4: 'Description', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum laboriosam dignissimos molestias maxime corporis dolores ad similique, libero ducimus id error aliquam praesentium ipsum quibusdam adipisci temporibus, aperiam accusamus.' },
    { img: ['https://i.pinimg.com/736x/fb/93/65/fb93657bff41b10c1727c56eb5cbc3ec.jpg', 'https://i.pinimg.com/736x/cb/64/a6/cb64a6dda8deda76d0f1d1323ba4a57f.jpg', 'https://i.pinimg.com/736x/0c/05/14/0c051456b838be1a1190500ac9399456.jpg'], h1: 'Project 04', h2: 'The Ultimate Shopping Experience', h3: 'Prject Info', h4: 'Description', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum laboriosam dignissimos molestias maxime corporis dolores ad similique, libero ducimus id error aliquam praesentium ipsum quibusdam adipisci temporibus, aperiam accusamus.' },
  ]

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
    <section className='h-[130vh] w-full flex flex-col justify-between'>
      <div className="h-[10vh] w-full flex items-center justify-between">
        <h1 className='text-[4vw]'>Selected Projects</h1>
        <div className="flex gap-[5vw]">
          <span onClick={()=>{handlePrev()}} className='p-[.8vw] rounded-xl max-sm:text-[5vw] sm:text-[5vw] bg-[blue] text-white lg:text-[1vw] cursor-pointer'><FaChevronLeft/></span>
          <span onClick={()=>{handleNext()}} className='p-[.8vw] rounded-xl max-sm:text-[5vw] sm:text-[5vw] bg-[blue] text-white lg:text-[1vw] cursor-pointer'><FaChevronRight/></span>
        </div>
      </div>
      <div className='relative h-[110vh] w-full overflow-hidden'>
        {data.map((item, i) => (
          <div key={i} ref={(el) => (slideRefs.current[i] = el)} className="absolute lg:h-[110vh] max-sm:h-[32vh] sm:h-[32vh] md:h-[47vh] w-full flex gap-5">
            <div className="left lg:h-full max-sm:h-[32vh] sm:h-[32vh] md:h-[47vh] w-[50%] flex flex-wrap justify-between gap-[2vw]">
              {item.img.map((image, i) => (
                <div key={i} className={`overflow-hidden ${i === 0 ? "lg:h-[75vh] max-sm:h-[20vh] sm:h-[20vh] md:h-[30vh] w-full rounded-2xl" : "lg:h-[30vh] max-sm:h-[10vh] sm:h-[10vh] md:h-[15vh] w-[45%] rounded-2xl"}`}>
                  <img className='h-full w-full object-cover object-top' key={i} src={image} />
                </div>
              ))}

            </div>
            <div className="right h-full w-[50%] lg:pt-[5vw]">
              <h1 className='text-[3vw]'>{item.h1}</h1>
              <h2 className='text-[2vw] py-[2vw]'>{item.h2}</h2>
              <h3 className='text-[2vw]'>{item.h3}</h3>
              <div className="flex flex-col text-sm max-sm:text-[6px]">
                <div className="flex justify-between">
                  <p>Client</p>
                  <p>The Ultimate experience</p>
                </div>
                <div className="flex justify-between">
                  <p>Year</p>
                  <p>2022</p>
                </div>
                <div className="flex justify-between">
                  <p>Platform</p>
                  <p>The Ultimate experience</p>
                </div>
              </div>
              <h4 className='text-[2vw] pb-[1vw]'>{item.h4}</h4>
              <p className='text-[1.2vw] max-sm:text-[6px] leading-none'>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
