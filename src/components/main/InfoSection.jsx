import React from 'react'

const InfoSection = () => {
  return (
    <div className='grid p-4 md:place-items-start ml-10'>
        <span className='text-[28px] text-white md:mr-12 ml-1'>iWatch <span className='text-black font-semibold'>series 8</span></span>
        <span className='text-[40px] text-white font-bold md:w-[60%]'>A healthy leap ahead.</span>
        <span className='text-[28px] text-white'>It’s the ultimate device for a healthy life. </span>
        <button className='text-xl text-[#384838] bg-white w-[8rem] rounded-full p-2 mt-4'> Buy</button>
    </div>
  )
}

export default InfoSection