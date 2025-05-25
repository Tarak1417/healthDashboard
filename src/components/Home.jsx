import React from 'react';
import Sidebar from './Sidebar';
import Headers from './Headers';
import CalanderImages from './CalanderImages';
import DashBoard from './maincomponents/DashBoard';
import ActivityGraph from './ActivityGraph';
import CalendarComponent from './maincomponents/CalendarComponent';
import DentistCheck from './maincomponents/DentistCheck';
import UpcommingAppoimnent from './maincomponents/UpcommingAppoimnent';


const Home = () => {
  return (
<div className="bg-[#c7d6e2] h-screen overflow-auto w-screen flex items-center justify-center p-5">
  <div className="bg-white rounded-2xl shadow-lg h-full w-full flex flex-col lg:flex-row p-0 md:p-10 lg:p-0 overflow-auto">
    
    <Sidebar />
    
    {/* DashBoard */}
    <div className="flex-1 p-6">
      <Headers />
      <div className='flex flex-col'>
        <DashBoard />
        <ActivityGraph />
      </div>
    </div>

    {/* Calendar Data */}
    <div className='flex-1 bg-[#f9fbfc] '>
      <div className='p-3 flex flex-col justify-between'>
        <div className='flex justify-end'>
          <CalanderImages />
        </div>
      </div>
      <CalendarComponent />
      <DentistCheck />
      <UpcommingAppoimnent />

    </div>
  </div>
</div>
  );
};

export default Home;
