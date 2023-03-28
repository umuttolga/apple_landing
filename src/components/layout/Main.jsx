import React, { useContext } from 'react'
import greenWatch from "../../assets/green_watch.png"
import { MyContext } from '../../store/MyProvider'
import Colors from '../main/Colors'
import InfoSection from '../main/InfoSection'
const Main = () => {
  const {watch} = useContext(MyContext);

  return (
    <div className='grid  lg:justify-between place-items-center lg:p-10 lg:mx-20  mt-[10vh] place-content-center  lg:grid-flow-col md:grid-flow-row'>
      <div className=' '>
        <InfoSection/>
      </div>
      <div className=' md:grid md:grid-flow-row lg:grid-flow-col'>
      <div className=''>
        <img src={watch} className={watch === greenWatch && "mr-12 mt-10"} alt="watch"/>
      </div>
      <div className='lg:mt-[10rem]'>
        <Colors/>
      </div>
      </div>

    </div>
  )
}

export default Main
