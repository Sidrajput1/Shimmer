import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Cta() {
    const navigate = useNavigate();
  return (
    <div className=" py-8">
     <div className="w-full items-center border-2 shadow-inner  shadow-white rounded-3xl lg:px-24 max-w-7xl md:px-12 mx-auto px-8 py-12">
    <div className="relative items-center">
        <div className="w-full justify-between lg:inline-flex lg:items-center">
            <div className="max-w-xl">
                <span className="text-sm text-rose-500 font-semibold uppercase tracking-widest">Ready to take Your business online</span>
                <p className="text-white font-extrabold mt-8 text-4xl tracking-tight">Contact Us Today let's create 
                    <span className="lg:block">something amazing together.</span>
                </p>
            </div>
            <div className="flex flex-col lg:ml-auto mt-12 sm:flex-row"><button
                    className="w-full items-center inline-flex duration-200 focus:outline-none font-medium justify-center px-6 py-3 rounded-xl text-center focus-visible:outline-black lg:w-auto bg-orange-700 focus-visible:ring-black hover:bg-rose-100 hover:text-rose-500 text-white"
                    onClick={()=>navigate('/contact')}>Get started now 
                    <span className="font-bold text-2xl ml-2">
                    <FaLongArrowAltRight />
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Cta