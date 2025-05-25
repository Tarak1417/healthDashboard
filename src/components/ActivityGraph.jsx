import React from "react";

const days = [  "Mon","Tues","Wed","Thurs", "Fri","Sat","Sun",  ];

const graphData = [
  [30, 45, 25, 35, 20],  
  [40, 20, 35, 30, 10],  
  [70, 50, 30, 40, 25],  
  [50, 30, 45, 20, 15],   
  [20, 40, 10, 15, 5],   
  [60, 35, 25, 40, 20],   
  [40, 60, 30, 25, 15],   
];

const barColors = ["bg-gray-300", "bg-cyan-400", "bg-indigo-600"];

const ActivityGraph = () => {
  return (
    <div className="p-3 bg-[#f9fbfc] rounded-xl md:w-125 lg:w-125 sm:w-100">
      <div className="flex justify-between mb-2">
        <h2 className="text-xs font-semibold text-indigo-800">Activity</h2>
        <p className="text-[10px] text-gray-500 mb-3">3 appointment on this week</p>
      </div>

      <div className="flex justify-between items-end h-24 gap-2">
        {graphData.map((bars, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center gap-[2px]">
            <div className="flex h-20 items-center gap-[4px]">

              <div className="flex flex-col-reverse">
                <div
                  className={`w-[3px] ${barColors[0]} rounded-sm `}
                  style={{ height: `${bars[0]}px` }}
                />
              </div>

              {/* Spacer */}
              <div className="w-[4px]" />

              {/* First cyan + indigo group */}
              <div className="flex flex-col-reverse gap-[2px]">
                <div
                  className={`w-[3px] ${barColors[1]} rounded-sm`}
                  style={{ height: `${bars[1]}px` }}
                />
                <div
                  className={`w-[3px] ${barColors[2]} rounded-sm`}
                  style={{ height: `${bars[2]}px` }}
                />
              </div>

              {/* Spacer */}
              <div className="w-[4px]" />

              {/* Second cyan + indigo group */}
              <div className="flex flex-col-reverse gap-[2px]">
                <div
                  className={`w-[3px] ${barColors[1]} rounded-sm`}
                  style={{ height: `${bars[3]}px` }}
                />
                <div
                  className={`w-[3px] ${barColors[2]} rounded-sm`}
                  style={{ height: `${bars[4]}px` }}
                />
              </div>
            </div>

            <span className="text-[10px] text-gray-500">
              {days[dayIndex]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;
