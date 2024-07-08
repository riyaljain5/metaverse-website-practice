import React from 'react'
import image1 from "../assets/insight1.png"
import image2 from "../assets/insight2.png"
import image3 from "../assets/insight3.png"

import arrow from "../assets/arrowright.png"

const Insights = () => {
  return (
    <section className='mt-48'>
      <div className='flex flex-col items-center justify-center gap-8 '>
        <h1 className='font-bold text-[64px] text-wrap text-white'>Insight about metaverse</h1>
        
        <div className='flex flex-row items-center mt-14 justify-start gap-14'>
          <img src={image1} alt="image" />
          <div className='flex flex-col items-center justify-start gap-3 w-[600px] mr-6'>
            <h3 className='text-white text-[42px] text-wrap '>The launch of the Metaverse makes Elon musk ketar-ketir</h3>
            <p className='text-gray-700  text-wrap   text-[20px]'>Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.</p>
          </div>
          <img src={arrow} />
        </div>


        <div className='flex flex-row items-center justify-start gap-14'>
          <img src={image2} alt="image" />
          <div className='flex flex-col items-center justify-start gap-3 w-[600px] mr-6'>
            <h3 className='text-white text-[42px] text-wrap'>7 tips to easily master the madness of the Metaverse</h3>
            <p className='text-gray-700  text-wrap  text-[20px]'>
            Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum</p>
          </div>
          <img src={arrow} />
        </div>
        
        
        <div className='flex flex-row items-center justify-start gap-14 '>
          <img src={image3} alt="image" />
          <div className='flex flex-col items-center justify-start gap-3 w-[600px] mr-6'>
            <h3 className='text-white text-[42px] text-wrap'>With one platform you can explore the whole world virtually</h3>
            <p className='text-gray-700  text-wrap text-[20px]'>Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem</p>
          </div>
          <img src={arrow} />
        </div>


      </div>

    </section>
  )
}

export default Insights