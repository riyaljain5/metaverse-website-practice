import React, { useState } from 'react'
import ExploreCards from '../components/ExploreCards'
import { worlds } from '../constants'

const World = () => {
  const [active, setActive] = useState('world-2')
  return (
    <section  className='flex flex-col justify-center items-center mt-36'>
      <h1 className='font-bold text-[64px]  text-center text-wrap text-white'>Choose the world you want to explore</h1>
      
      <div className='mt-[50px] flex-wrap  flex lg:flex-row flex-col min-h-[70vh] gap-5'>
      {worlds.map((world, index)=>(
        <ExploreCards key={world.id}
        {...world}
        index={index}
        active = {active}
        handleClick = {setActive}/>
      ))}
      </div>
      

    </section>
  )
}

export default World