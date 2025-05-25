import React from 'react'

const UpcommingAppoimnent = () => {
  return (
    <div className='md:p-0 lg:p-0 p-2'>
    <h1 className='text-indigo-900 text-md font-bold mt-3 '>The upcoming Schedule</h1>
    <p className='tex-[grey] text-sm mt-2 '>On Thursday</p>
<div className="flex flex-col md:flex-row mt-2 md:mt-3 lg:mt-3 items-center md:items-start">     
      <div className=' bg-[#bcbdbd]  md:w-80 lg:w-65 w-80 h-20 p-3 rounded-2xl md:mr-5 lg:mr-5 mr-0 md:mb-0 lg:mb-0 mb-5'>
            <div className='flex justify-between'>
            <h1 className='text-white text-md'>Health checkup Complete</h1>
            <p>💉</p>
            </div>
            <p className='text-white text-sm'>11:00Am</p>
            

        </div>
         <div className=' bg-[#bcbdbd] md:w-80 lg:w-65 w-80 h-20 p-3 rounded-2xl'>
            <div className='flex justify-between'>
            <h1 className='text-white text-md'>Health checkup Complete</h1>
            <p>👁️</p>
            </div>
            <p className='text-white text-sm'>14:00pm</p>
            

        </div>


    </div>

    <p className='tex-[grey] text-sm mt-2'>On Saturday</p>
  <div className="flex flex-col md:flex-row  items-center md:items-start">
        <div className=' bg-[#bcbdbd] md:w-80 lg:w-50 w-80 h-17 md:mr-5 lg:mr-5 mr-0 md:mb-0 lg:mb-0 mb-5 p-3 rounded-2xl'>
            <div className='flex justify-between'>
            <h1 className='text-white text-sm'>Cardiologist</h1>
            <p>❤️</p>
            </div>
            <p className='text-white text-sm'>12:00pm</p>
            

        </div>
         <div className=' bg-[#bcbdbd] md:w-80 lg:w-50 w-80 h-17 p-3 rounded-2xl'>
            <div className='flex justify-between'>
            <h1 className='text-white text-sm'>Neurologist</h1>
            <p>🧑🏻‍⚕️</p>
            </div>
            <p className='text-white text-sm'>16:00Am</p>
            

        </div>
         


    </div>
      
    </div>
  )
}

export default UpcommingAppoimnent
