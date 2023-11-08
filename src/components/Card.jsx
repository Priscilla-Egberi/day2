import React from 'react'

const Card = ({title, body, object, color}) => {
  return (
    <>
    <div className={`bg-white max-w-[400px]  leading-[1.5] shadow-lg rounded-sm border-t-4 ${color} p-5`}>
        <p className='font-bold'>{title}</p>
        <p className=''>{body}</p>
        <div className='flex justify-end mt-2 md:mt-6'>
             <img src={object} alt="search" className=' w-16' />
        </div>
      </div>
    </>
  )
}

export default Card