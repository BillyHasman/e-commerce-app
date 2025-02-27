import Card from '../Card/Card'
import SectionHeading from './SectionHeading/SectionHeading'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import required modules
import { Navigation } from 'swiper/modules'

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
      <div className='mx-5 px-10'>
        <Swiper
          navigation={true} // Menambahkan navigasi (panah)
          modules={[Navigation]} // Menambahkan modul Navigation
          spaceBetween={30} // Menambah jarak antar slide
          slidesPerView={3} // Mengatur jumlah slide yang tampil dalam 1 layar
          loop={true} // Mengaktifkan fitur loop untuk carousel
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 card pada layar kecil
            },
            768: {
              slidesPerView: 2, // 2 card pada layar medium
            },
            1024: {
              slidesPerView: 4, // 3 card pada layar besar
            },
          }}
          className='mySwiper'
        >
          {items?.map((item, index) => (
            <SwiperSlide key={item.title + index} className='px-5'>
              <Card className='' title={item.title} imagePath={item.imagePath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default NewArrivals
