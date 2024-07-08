import React from 'react'
import headset from "../assets/headset.png"
const ExploreCards = ({id, index, imgUrl, title, active, handleClick}) => {
  return (
    <div className={`relative ${ active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"  }
    flex items-center justify-center min-w-[170px] h-[700px] cursor-pointer`}
    onClick={()=>handleClick(id)}>

      <img src={imgUrl} alt={title}
      className='absolute w-full h-full rounded-[24px] object-cover' />
     
     
     {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) :(
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] '>
        <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
          <img src={headset} alt="headset"
          className='w-1/2 h-1/2 object-contain'/>
        </div>
        <p className='font-normal text-[16px] leading-[20.16px] text-white uppercase'>Enter the Metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
    </div>
  )
}

export default ExploreCards