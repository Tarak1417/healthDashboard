import React from 'react'

const DentistCheck = () => {
  return (
<div className="flex flex-col md:flex-row mt-2 md:mt-3 lg:mt-3 items-center md:items-start">
        <div className=' bg-indigo-900 md:w-80 lg:w-60 w-80 h-22 p-3 rounded-2xl md:mr-5 lg:mr-5'>
            <div className='flex justify-between'>
            <h1 className='text-white text-sm'>Dentist</h1>
            <p>🦷</p>
            </div>
            <p className='text-white text-sm'>09:00-11:00</p>
             <p className='text-white text-sm'>Dr.Cameron Williamson</p>

        </div>
         <div className=' bg-[#bcbdbd] md:w-80 lg:w-70 md:mt-0 lg:mt-0 mt-5 w-80 h-22 p-3 rounded-2xl'>
            <div className='flex justify-between'>
            <h1 className='text-white text-sm'>Physiotherapy Appoinment</h1>
            <p>💪🏻</p>
            </div>
            <p className='text-white text-sm'>11:00-12:00</p>
             <p className='text-white text-sm'>Dr.Kevin Djones</p>

        </div>

      
    </div>
  )
}

export default DentistCheck
