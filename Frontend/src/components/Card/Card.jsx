const Card = ({ imagePath, title }) => {
  return (
    <div className='flex flex-col items-center pt-8'>
      {/* Gambar yang terpusat secara vertikal dan horizontal */}
      <img src={imagePath} alt={title} className='w-full sm:w-28 md:w-48 lg:w-52 xl:w-60 h-auto sm:h-40 md:h-56 lg:h-72 xl:h-96 bg-cover bg-center rounded hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out' />
      {/* Teks di bawah gambar */}
      <p className='text-lg pt-3 text-center'>{title}</p>
    </div>
  )
}

export default Card
