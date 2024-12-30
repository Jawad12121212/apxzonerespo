import React from 'react'

const Hero = () => {
    const data = [
        { icn: '/img/I.png', name: 'Development' },
        { icn: '/img/II.png', name: 'Prototype' },
        { icn: '/img/III.png', name: 'UX Design' },
        { icn: '/img/IV.png', name: 'UI Design' },
        { icn: '/img/V.png', name: 'Web Dev' },
        { icn: '/img/VI.png', name: 'Branding' },
    ]
    return (
        <section className='h-screen w-full flex'>
            <div className="left max-sm:h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex flex-col justify-center items-start w-[50%] lg:justify-end">
                <h1 className='text-[4vw] leading-[3.7vw] w-[80%]'>WE CRAFT EXTRAORDINARY DIGITAL PRODUCT & EXPERIENCE</h1>
                <p className='pt-[2vw] max-sm:text-[1.6vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.3vw] leading-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas rerum culpa deleniti dolores necessitatibus quo dolorum perferendis exercitationem repellat, fugit sunt! Sed expedita minima alias, nostrum officiis deserunt accusamus.</p>
                <div className="flex gap-6 py-[4vw]">
                    {['CONTACT US', 'SEE MORE'].map((item, i) => (
                        <button key={i} className={`${i == 0 ? 'bg-[#237FC6] text-white' : 'border-[1px] border-[#237FC6]'} px-[2vw] rounded-full text-[1.2vw] py-[1vw]`}>{item}</button>
                    ))}
                </div>
            </div>
            <div className="right max-sm:h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] flex justify-center items-center w-[50%]">
                <div className="relative h-[30vw] w-[30vw] rounded-full ">
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[15vw] w-[15vw] rounded-full">
                        <img className='h-full w-full object-cover object-top' src="/img/man.png" />
                    </div>
                    {['/img/I.png', '/img/II.png', '/img/III.png', '/img/IV.png', '/img/V.png', '/img/VI.png'].map((item, i) => (
                        <div style={{transform: `rotate(${i* 60}deg)`}} key={i} className="absolute left-[50%] origin-[0_15vw] h-[5vw] w-[5vw]">
                            <img style={{transform: `rotate(-${i*60}deg)`}} className='h-full w-full object-cover object-center' src={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
