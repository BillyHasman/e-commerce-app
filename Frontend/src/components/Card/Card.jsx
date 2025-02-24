import PropTypes from 'prop-types'

const Card = ({ imagePath, title }) => {
  return (
    <div className='flex flex-col p-8'>
      <img src={imagePath} alt='Jeans' className='min-h-96 max-h-96 max-w-auto min-w-auto bg-cover bg-center border rounded hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out' />
      <p className='text-lg pt-3'>{title}</p>
    </div>
  )
}

Card.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
