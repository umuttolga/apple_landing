import React, { useContext } from 'react'
import { MyContext } from '../../store/MyProvider';

const Colors = () => {
    const {handleDarkChange,
        handleRedChange,
        handleRoseChange, color, handleColorChange} = useContext(MyContext);
    const colors = ["bg-[#C86070]", "bg-[#5C5555]", "bg-[#D39090]", "bg-[#384838]"]
    const newColors = colors.filter((item) => item !== color)

  return (
    <div className='grid grid-flow-col auto-cols-max place-content-center gap-4   md:grid-flow-col lg:grid-flow-row  p-4'>
        {/* <div onClick={handleRedChange} className='w-[3rem] rounded-full bg-[#A8233B] shadow-xl h-[3rem]'></div>
        <div className='w-[3rem] rounded-full bg-[#5C5555] shadow-xl h-[3rem]'></div>
        <div className='w-[3rem] rounded-full bg-[#D39090] shadow-xl h-[3rem]'></div> */}
        {newColors.map((item, index) =>  (
            <div key={index} onClick={() => handleColorChange(item)} className={`w-[3rem] rounded-full ${item} shadow-xl h-[3rem]`}></div>
        ))}
    </div>
  )
}

export default Colors