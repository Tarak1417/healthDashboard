import React from 'react';
import lungsImg from '../../assets/lungs.png';
import teethImg from '../../assets/teeth.png';
import boneImg from '../../assets/bone.png';
import { ArrowRight, ArrowUpRightFromSquareIcon, LucideArrowUpRight } from 'lucide-react';

export const anatomyIndicators = [
  { part: "Lungs", status: "Issue", color: "#7f3131" },
  { part: "Teeth", status: "Checkup Needed", color: "#96f2ff" },
  { part: "Bone", status: "Good", color: "orange" },
];

const imageMap = {
  Lungs: lungsImg,
  Teeth: teethImg,
  Bone: boneImg,
};

const AnatomyCard = ({ part, status, color }) => {
  return (
    <div className=''>
    <div className=" bg-[#f9fbfc]  rounded-xl ml-10 mt-[]  ">
      <div className='flex item-center'>
      <img src={imageMap[part]} alt={part} className="h-15 w-15 object-contain" />
      <h2 className="text-sm font-bold text-center mt-2">{part}</h2>
      </div>
        <p className="text-[10px] text-center text-gray-500">Date: 26 Oct 2023</p>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full`}
          style={{ width: '80%', backgroundColor: color }}
        ></div>
      </div>
    
     
    </div>
    </div>

  );
};

const AnatomyDashboard = () => {
  return (
        <>
        <div className='mt-[-40px]'>
      <div className="flex flex-wrap md:flex gap-6 p-6  ">
        {anatomyIndicators.map((item, index) => (
          <AnatomyCard key={index} {...item} />
        ))}
      </div>
      <div className='flex items-center ml-36 mt-[-10px]'>
        <h1 className='text-sm'>Details </h1>
        <ArrowRight className='h-4 w-4' />
      </div>
      </div>
    </>

  );
};

export default AnatomyDashboard;
