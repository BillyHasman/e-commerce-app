import HeroImg from '../../img/hero-img.png'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flext-start bg-center text-left h-svh w-full' style={{ backgroundImage: `url(${HeroImg})` }}>
      <div className='absolute top-0 right-0 bottom-0 left-0'></div>
      <main className='px-10 lg:px-24 z-10'>
        <div className='text-left'>
          <h2 className='text-3xl text-white'>T-shirt / Tops</h2>
        </div>
        <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-6xl'>Summer Value Pack</p>
        <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-2xl'>cool / colorfu / comfy</p>
        <button className='border-2 rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out text-white bg-black w-44 h-12'>Shop Now</button>
      </main>
    </div>
  )
}

export default HeroSection
