import React from 'react'
import map from "../assets/map.png"
const People = () => {
  return (
    <section className='flex flex-col mt-32 justify-center items-center'>
     <div className='flex-col flex justify-center items-center'>
     <h1 className='font-bold text-[64px] text-wrap text-center text-white'>
      Track friends around you and invite them to play together in the same world
      </h1>
      <img src={map} alt="" />
     </div>

    </section>
  )
}

export default People