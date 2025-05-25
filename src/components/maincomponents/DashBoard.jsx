import React from 'react'
import anatomay from "../../assets/anatomay_image-removebg-preview.png"
import { ChevronDown, ZoomIn } from 'lucide-react';
import AnatomyDashboard from './AnatomyDashboard';
import SkleImage from '../SkleImage';




const DashBoard = () => {
  return (
    <div className='flex-1 h-screen '>
       <div className="flex justify-between items-center p-6">
  <h1 className="text-indigo-900 text-2xl font-bold">DashBoard</h1>

  <div className="flex items-center gap-2   rounded-lg cursor-pointer hover:bg-[#e2e8f0] transition">
    <p className="text-sm text-gray-700 font-medium">This Week</p>
    <ChevronDown className="w-4 h-4 text-gray-600" />
  </div>
</div>


     <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between ml-10">
        <SkleImage />
        <div className="mt-10 md:mt-0 lg:mt-0" >
             
<AnatomyDashboard/>
     
        </div>
      </div>
    </div>
  )
}

export default DashBoard;
