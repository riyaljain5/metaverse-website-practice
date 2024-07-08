import React from 'react'
import image from "../assets/image.png"
const Samantha = () => {
  return (
   <section className="mt-40">
    <div className='flex flex-row justify-center w-[1176px] items-center  gap-2'>
        <div className='w-[370px] h-[610px] rounded-[32px] border-[1px] border-#6A6A6A'></div>
        < img src={image} alt="" />
    </div>
   </section>
  )
}

export default Samantha