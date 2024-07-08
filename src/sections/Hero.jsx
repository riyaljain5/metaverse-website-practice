import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../style'
import home from "../assets/home.png"

import stamp from "../assets/stamp.png"
const Hero = () => {
  return (
    <section className='px-20 py-2 flex flex-col '>
        <Navbar/>
        <div className='flex justify-center mt-36 items-center flex-col  '>
          <h1 className={styles.heroHeading}>Metaverse</h1>
        </div>
          
          
          <div className='flex flex-row justify-center items-center relative z-10'>
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText}></div>
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </div>
          
         
          <div className='justify-end flex '>
          <img src={home} alt="image"
            className='relative -top-[30px]  rounded-tl-[140px] rounded-bl-[42px] z-[0] w-full sm:h-[500px] h-[350px] ' />
          </div>
          
          <div className=" flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img src={stamp} alt="stamp"
            className='sm:w-[192px] w-[192px] sm:h-[155px] h-[192px] object-contain' />
          </div>
      

      
    </section>

  )
}

export default Hero