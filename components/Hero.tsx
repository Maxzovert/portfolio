import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white '/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw] fill-purple'/>
      </div>
    </div>
  )
}

export default Hero
