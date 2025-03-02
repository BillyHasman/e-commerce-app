import React from 'react'
import SectionHeading from './SectionHeading/SectionHeading'
import Card from '../Card/Card'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import required modules
import { Navigation } from 'swiper/modules'

// Image imports
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import Tshirts from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Joggers from '../../assets/img/joggers.jpg'
import Kurtis from '../../assets/img/kurtis.jpg'

const items = [
  {
    title: 'Jeans',
    imagePath: Jeans,
  },
  {
    title: 'Shirts',
    imagePath: Shirts,
  },
  {
    title: 'T-Shirts',
    imagePath: Tshirts,
  },
  {
    title: 'Dresses',
    imagePath: Dresses,
  },
  {
    title: 'Joggers',
    imagePath: Joggers,
  },
  {
    title: 'Kurtis',
    imagePath: Kurtis,
  },
]

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={'New Arrivals'} />

      {/* Swiper Carousel */}
      <div className='mx-5 px-10 '>
        <Swiper
          navigation={true}
          modules={[Navigation]} // Menambahkan modul Navigation
          spaceBetween={5} // Mengurangi jarak antar slide
          loop={true} // Membuat carousel berputar
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide untuk layar 320px atau kurang
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2, // 2 slide untuk layar 480px atau lebih
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // 3 slide untuk layar 768px atau lebih
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5, // 4 slide untuk layar 1024px atau lebih
              spaceBetween: 20,
            },
          }}
          className='mySwiper '
        >
          {items?.map((item, index) => (
            <SwiperSlide key={item.title + index} className='px-5'>
              <Card title={item.title} imagePath={item.imagePath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default NewArrivals
