import React from "react";
import { Plus } from "lucide-react"; 


const CalanderImages = () => {
  return (
    <div className="flex gap-2">
<div className="w-10 h-10 rounded-xl bg-cyan-400 flex items-center justify-center text-2xl">
  👩🏻‍🦱
</div>
     
      <div className="w-10 h-10 rounded-xl bg-indigo-800 flex items-center justify-center">
        <Plus color="white" size={20} />
      </div>
    </div>
  );
};

export default CalanderImages;
