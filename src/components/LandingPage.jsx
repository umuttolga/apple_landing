import React, { useContext } from 'react'
import { MyContext } from '../store/MyProvider';
import Main from './layout/Main'
import Navbar from './layout/Navbar'

const LandingPage = () => {
  const { color } = useContext(MyContext);
  return (
    <div className={`md:h-full lg:h-screen h-full ${color}`}>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default LandingPage
