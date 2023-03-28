import React, { useState } from 'react'
import appleLogo from "../../assets/apple.png"
import menuLogo from "../../assets/menu.png"
import searchLogo from "../../assets/search.png"
import lockLogo from "../../assets/lock.png"
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
  return (
    <div className='grid grid-flow-col items-center sm:justify-between p-4'>
        <div className='grid grid-flow-col items-center  auto-cols-max'>
            <img src={appleLogo} alt="apple"/>
            <h2>watch</h2>
        </div>
       
        {/* Mobile */}
        <div className='relative'>
        <img className='md:hidden' onClick={() => setShowMenu(!showMenu)} src={menuLogo} alt="menu"/>
       {showMenu && <ul className='hover:cursor-pointer absolute space-y-2 mt-4'>
            <li>Store</li>
            <li>Mac</li>
            <li>Ipad</li>
            <li>Iphone</li>
            <li>Watch</li>
            <li>AirPodes</li>
            <li>TV & Home</li>
            <li>Accessories</li>
        </ul>}
        </div>
        <div className='grid gap-4  grid-flow-col '>
             {/* large screens */}
        <ul className='grid-flow-col hover:cursor-pointer gap-2 hidden md:grid'>
            <li>Store</li>
            <li>Mac</li>
            <li>Ipad</li>
            <li>Iphone</li>
            <li>Watch</li>
            <li>AirPodes</li>
            <li>TV & Home</li>
            <li>Accessories</li>
        </ul>
        <div className='sm:auto-cols-max sm:gap-4 grid-flow-col grid'>
        <img  src={searchLogo} alt="menu"/>
        <img  src={lockLogo} alt="menu"/>
        </div>
        </div>
    </div>
  )
}

export default Navbar