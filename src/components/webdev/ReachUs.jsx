import React from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function ReachUs() {
  const navigate = useNavigate();
  return (
    <div className='bg-sky-950 text-white h-[60vh] md:p-8 p-4 flex flex-col gap-8 justify-center items-center'>
        <div className='md:text-5xl text-3xl text-center'>
            <h2 className='md:leading-relaxed leading-tight md:text-5xl text-xl line-clamp-1  font-semibold'>Have Any Project in Your Mind?</h2>
            <h3 className='leading-relaxed text-center  font-semibold' >Feel Free To Reach Us!</h3>
        </div>
        <div className='bg-orange-800 text-xl  font-bold md:py-16 py-8 md:px-6 px-4  rounded-full'>
            <button onClick={()=>navigate('/app-development')} className='flex flex-col items-center'> Let's talk With Us! <span className='ml-0 mt-2 text-xl md:text-2xl text-gray-200 animate-pulse'> <FaLongArrowAltUp /> </span> </button>
        </div>
    </div>
  )
}

export default ReachUs