import React from 'react'
import arrow from "../assets/arrowdown.png"
const About = () => {
  return (
    <section 
    className='flex flex-col justify-center items-center text-wrap sm:p-16 xs:p-8 px-6 py-12'>
      <p className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-gray-300 w-[1045px] '>
        <span className='font-extrabold'>Metaverse</span> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <span className='font-extrabold'>madness of the metaverse</span> of today, using only <span className='font-extrabold'>VR</span> devices you can easily <span>
        explore</span> the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down</p>

      <img src={arrow} alt="arrowdown"
      className='mt-40' />
    </section>
  )
}

export default About