import React from 'react'
import earth from "../assets/earth-1.png"
import rectangle from "../assets/Rectangle 21.png"
const HowItWorks = () => {
  return (
    <section className='flex flex-row mt-48 justify-center items-center gap-20'>
      <div className=' '>
        
        <img src={earth} alt=""
        className='w-full h-full ml-32' />

      </div>
      <div className='flex flex-col justify-start mt-2 text-wrap mr-3 px-3'> 
        <h1 className='text-white text-[64px] font-bold px-3 '>Get started with just a few clicks</h1>
        <div className='flex relative flex-row gap-8 py-2 justify-start items-center'>
          <img src={rectangle} alt="" />

          <p className='text-white text-[18px]'>Find a world that suits you and you want to enter</p>
        </div>
        <div className='flex flex-row gap-8 py-2 justify-start items-center'>
          <img src={rectangle} alt="" />
          <p className='text-white text-[18px]'>Enter the world by reading basmalah to be safe</p>
        </div>
        <div className='flex flex-row py-2 justify-start items-center gap-8'>
          <img src={rectangle} alt="" />
          <p className='text-white text-[18px]'>No need to beat around the bush, 
          just stay on the gas and have fun</p>
        </div>

      </div>

    </section>
  )
}

export default HowItWorks