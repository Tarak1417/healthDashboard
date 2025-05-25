import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import dayjs from 'dayjs';

// Pool of possible time slots
const availableSlots = [
  '9:00', '10:30', '12:00', '1:15', '2:45',
  '4:00', '5:30', '6:45', '8:00',
];

// Function to get random time slots (2 to 4)
const getRandomSlots = () => {
  const shuffled = availableSlots.sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 3) + 2;
  return shuffled.slice(0, count).map(slot => ({
    time: slot,
    variant: Math.random() > 0.5 ? 'dark' : 'light',
  }));
};

const generateWeekData = (startDate) => {
  return Array.from({ length: 7 }).map((_, i) => {
    const date = dayjs(startDate).add(i + 2, 'day');
    return {
      day: date.format('ddd'),
      date: date.format('DD'),
      slots: getRandomSlots(),
    };
  });
};

const CalendarComponent = () => {
  const [weekStart, setWeekStart] = useState(dayjs());

  const nextWeek = () => setWeekStart(prev => prev.add(7, 'day'));
  const prevWeek = () => setWeekStart(prev => prev.subtract(7, 'day'));

  const weekData = generateWeekData(weekStart);
  const currentMonthDay = dayjs(weekStart).format('MMMM DD'); // Example: August 24

  return (
    <div className="lg:p-0 md:p-0 p-5  max-w-7xl mx-auto ">
      {/* Left Month and Day Section */}
      <div className="w-32 mr-4  flex flex-col justify-start items-start text-left">
        <div className="text-xl font-bold  text-indigo-700">{currentMonthDay}</div>

      </div>

      {/* Right Calendar Section */}
      <div className="flex-1 mt-[-20px]">
        {/* Navigation Arrows */}
        <div className="flex justify-end ">
          <button onClick={prevWeek} className="mr-2 hover:text-blue-600">
            <ArrowLeft />
          </button>
          <button onClick={nextWeek} className="hover:text-blue-600">
            <ArrowRight />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-4">
          {weekData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-md bg-[#f9fbfc] p-2 transition-all duration-300 group hover:bg-sky-100"
            >
              <div className="text-sm font-semibold text-gray-600 group-hover:text-sky-800">
                {item.day}
              </div>
              <div className="text-lg font-bold text-indigo-600 group-hover:text-sky-800">
                {item.date}
              </div>
              <div className="mt-2 space-y-1 w-full flex flex-col items-center">
                {item.slots.map((slot, i) => (
                  <div
                    key={i}
                    className={`text-xs px-2 py-1 rounded-md transition-all duration-200 group-hover:bg-sky-300 group-hover:text-white
                      ${
                        slot.variant === 'dark'
                          ? 'bg-indigo-900 text-white'
                          : 'bg-indigo-200 text-indigo-800'
                      }`}
                  >
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
