
const Skill = ({name, image}) => {
  return (
    <div className='p-4'>
        <img src={image} alt={name} className='hover:scale-105 ease-in duration-100' />
        <p className='text-center font-bold text-white/90 pt-2'>{name}</p>
    </div>
  )
}

export default Skill
