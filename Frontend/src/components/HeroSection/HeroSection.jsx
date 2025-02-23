import React from 'react'
import HeroImg from '../../assets/img/hero-img.png'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center h-screen w-full text-left' style={{ backgroundImage: `url(${HeroImg})` }}>
      <div className='absolute top-0 right-0 bottom-0 left-0'>
        <main className='px-10'></main>
      </div>
    </div>
  )
}

export default HeroSection
