import PropTypes from 'prop-types'

const SectionHeading = ({ title }) => {
  return (
    <div className='flex flex-wrap px-10 my-5'>
      <div></div>
      <p className='text-3xl'>{title}</p>
    </div>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionHeading
