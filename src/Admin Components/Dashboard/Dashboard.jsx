// src/components/Dashboard.js
import React from 'react';
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
        </header>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className='bg-sky-300 text-white p-10 inset-3 shadow-lg shadow-sky-500/50 rounded-md duration-700 select-none'>
            <h1 className='text-center text-base xl:text-xl font-bold'>Total Property</h1>
            <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
              <CountUp end={562} duration={2.5} />
            </span>
          </div>
          <div className='bg-teal-300 text-white p-10 inset-3 shadow-lg shadow-teal-500/50 rounded-md duration-700 select-none'>
            <h1 className='text-center text-base xl:text-xl font-bold'>Total Agents</h1>
            <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
              <CountUp end={4562} duration={2.5} />
            </span>
          </div>
          <div className='bg-rose-300 text-white p-10 inset-3 shadow-lg shadow-rose-500/50 rounded-md duration-700 select-none'>
            <h1 className='text-center text-base xl:text-xl font-bold'>Others</h1>
            <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
              <CountUp end={1200} duration={2.5} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
