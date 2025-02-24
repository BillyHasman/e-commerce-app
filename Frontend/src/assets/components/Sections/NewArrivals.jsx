import Card from '../Card/Card'
import SectionHeading from './SectionHeading/SectionHeading'
import Jeans from '../../img/jeans.jpg'
import Shirts from '../../img/shirts.jpg'
import Tshirts from '../../img/tshirts.jpeg'
import Dresses from '../../img/dresses.jpg'

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
]

const NewArrivals = () => {
  return (
    <>
      <SectionHeading title={'New Arrivals'} />
      <div className='flex flex-wrap'>{items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}</div>
    </>
  )
}

export default NewArrivals
