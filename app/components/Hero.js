import React from 'react'

const Hero = () => {
  const data = [
    {icn: '/img/I.png', name: 'Development'},
    {icn: '/img/II.png', name: 'Prototype'},
    {icn: '/img/III.png', name: 'UX Design'},
    {icn: '/img/IV.png', name: 'UI Design'},
    {icn: '/img/V.png', name: 'Web Dev'},
    {icn: '/img/VI.png', name: 'Branding'},
  ]
  return (
    <section className='w-full flex max-sm:flex-col-reverse md:h-[50vh] xl:h-screen'>
        <div className="left h-full w-[50%] max-sm:h-[50vh] max-sm:w-full flex flex-col justify-end max-sm:justify-center md:justify-center xl:justify-end">
          <div className="">
          <h1 className='text-[4vw] leading-[4vw] w-[80%] max-sm:w-full'>WE CRAFT EXTRAORDINARY DIGITAL PRODUCT & EXPERIENCE</h1>
          </div>
          <p className='pt-[2vw] max-sm:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas rerum culpa deleniti dolores necessitatibus quo dolorum perferendis exercitationem repellat, fugit sunt! Sed expedita minima alias, nostrum officiis deserunt accusamus.</p>
          <div className="flex gap-6 py-[4vw]">
          {['CONTACT US', 'SEE MORE'].map((item, i)=>(
            <button key={i} className={`${i==0? 'bg-[#237FC6] text-white' : 'border-[1px] border-[#237FC6]'} px-[2vw] rounded-full text-[1.2vw] py-[1vw]`}>{item}</button>
          ))}
          </div>
        </div>
        <div className="right h-full w-[50%] max-sm:h-[50vh] max-sm:w-full flex justify-center items-center">
          <div className="relative max-sm:h-[50vw] max-sm:w-[50vw] xl:h-[30vw] xl:w-[30vw] md:h-[40vw] md:w-[40vw] rounded-full">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-sm:h-[35vw] max-sm:w-[35vw] h-[20vw] w-[20vw] rounded-full flex items-center justify-center">
              <img src="/img/man.png" alt="" />
            </div>
            {data.map((item, i)=>(
              <div key={i} style={{transform: `rotate(${i* 60}deg)`}} className="absolute left-[50%] max-sm:origin-[0_25vw] xl:origin-[0_15vw] md:origin-[0_20vw] xl:h-[5vw] xl:w-[5vw] md:h-[5vw] md:w-[5vw] max-sm:h-[30px] max-sm:w-[30px] rounded-full flex flex-col items-center justify-center">
                <img style={{transform: `rotate(-${i*60}deg)`}} src={item.icn}/>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Hero
