import React from 'react';
import { ZoomIn } from 'lucide-react';
import anatomay from "../assets/anatomay_image-removebg-preview.png";
import { FaWalking } from 'react-icons/fa';

const SkleImage = () => {
  return (
    <div className="bg-[#f9fbfc] rounded-2xl p-4 md:w-full w-full max-w-md h-64 sm:h-72 md:h-80 mt-[-20px] relative flex items-center justify-center">
      {/* Zoom Icon */}
      <div className="absolute top-4 right-4 z-10">
        <ZoomIn className="text-gray-600" />
      </div>

      {/* Anatomy Image */}
      <img 
        src={anatomay} 
        alt="skeleton" 
        className="w-full h-full object-contain absolute" 
      />

      {/* Healthy Leg Card */}
    {/* Healthy Leg Card - Visible on sm and up */}
<div className="absolute bottom-20 right-45 w-48 h-10 bg-cyan-400 rounded-md sm:flex hidden items-center px-4 shadow-md z-10">
  <FaWalking className="text-yellow-400 mr-2" />
  <span className="text-white font-semibold text-sm whitespace-nowrap">Healthy Leg</span>

  {/* Scanning Overlay */}
  <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-md border-2 border-blue-300 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-80 shadow-lg pointer-events-none" />
</div>

{/* Healthy Heart Card - Reversed and Responsive */}
<div className="absolute top-16 left-43 w-48 h-10 bg-indigo-900 rounded-md sm:flex hidden items-center justify-end px-4 shadow-md z-10">
  <p>❤️</p>
  <span className="text-white font-semibold text-sm whitespace-nowrap mr-2">Healthy Heart</span>

  {/* Scanning Overlay */}
  <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-md border-2 border-blue-300 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-80 shadow-lg pointer-events-none" />
</div>

    </div>
  );
};

export default SkleImage;
