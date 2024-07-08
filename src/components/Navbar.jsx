import React from 'react'
import searchIcon from "../assets/search_icon.png";
import menuIcon from "../assets/menu_icon.png";
const Navbar = () => {
  return (
    <nav className=' mt-8  relative'>
        <div className='flex flex-row justify-between items-center px-12'>
        <div className="absolute w-[50%] inset-0 gradient-01 " />
            <img 
              src={searchIcon} 
              alt="search"
              className='w-[24px] h-[24px]' />
            <h1 className='text-center text-white text-[22px] font-extrabold uppercase'>Metaversus</h1>
            <img 
              src={menuIcon} 
              alt="menu"
              className='w-[20px] h-[20px]' />
        </div>
        
        
    </nav>
  )
}

export default Navbar