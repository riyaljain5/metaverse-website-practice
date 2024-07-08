import React from 'react'
import earth from "../assets/earth-2.png"
const WhatsNew = () => {
  return (
    <section className='px-8 mt-28 py-3'>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col justify-center ml-28'>
          <h1 className='font-bold text-[64px] text-wrap text-white'>What's new about Metaversus?</h1>
          <div className='flex flex-row justify-start items-center gap-7 '>

            <div className='flex flex-col gap-4'>
              <img src="" alt="" />
              <h2 className='text-white text-[18px] font-bold'>A new world</h2>
              <p className='text-white  text-wrap  w-[200px] text-[18px]'>we have the latest update with new world for you to try never mind</p>
            </div>


            <div className='flex flex-col gap-4'>
              <img src="" alt="" />
              <h2 className='text-white text-[18px] font-bold'>More realistic</h2>
              <p className='text-white text-wrap w-[200px] text-[18px]' >In the latest update, your eyes are narrow, making the world more realistic than ever</p>
            </div>
          </div>
        </div>
        <div className='mr-28'>
          <img src={earth} alt="" className='w-full h-full' />
        </div>
      </div>
    </section>
  )
}

export default WhatsNew