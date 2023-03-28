import React, { createContext, useState } from 'react';
 import greenWatch from "../assets/green_watch.png"
 import skinWatch from "../assets/skin_watch.png"
 import roseWatch from "../assets/rose_watch.png"
 import darkWatch from "../assets/dark_watch.png"

export const MyContext = createContext();
const MyProvider = ({children}) => {
    const [color, setColor] = useState('bg-[#384838]')
    const [watch, setWatch] = useState(greenWatch)

const handleColorChange = (color) => {
    setColor(color)
    if(color === 'bg-[#C86070]'){
        setWatch(roseWatch)
    } else if(color === 'bg-[#5C5555]'){
        setWatch(darkWatch)
    } else if(color === 'bg-[#D39090]'){
        setWatch(skinWatch)
    } else {
        setWatch(greenWatch)
    }
  
}
  return (
    <MyContext.Provider value={{color, handleColorChange, watch}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider
