// src/components/Dashboard.js
import React from 'react';
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <div className="bg-gray-100">
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
            <CountUp end={45} duration={2.5} />
          </span>
          <div className='mt-6 flex md:block lg:flex gap-2 items-center'>
            <div className='flex -space-x-3'>
              <div className='relative'>
                <img src="https://i.ibb.co/P1x2P0S/agent3.png" alt="" className='w-10 rounded-full border' />
              </div>
              <div className='relative'>
                <img src="https://i.ibb.co/W5bCbfR/agent1.png" alt="" className='w-10 rounded-full border' />
              </div>
              <div className='relative'>
                <img src="https://i.ibb.co/HgsM0Rr/agent2.png" alt="" className='w-10 rounded-full border' />
              </div>
              <div className='relative'>
                <img src="https://i.ibb.co/86qGByg/agent4.png" alt="" className='w-10 rounded-full border' />
              </div>
            </div>
            <p className='text-lg'> + 41</p>
          </div>
        </div>
        <div className='bg-rose-300 text-white p-10 inset-3 shadow-lg shadow-rose-500/50 rounded-md duration-700 select-none'>
          <h1 className='text-center text-base xl:text-xl font-bold'>Others</h1>
          <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
            <CountUp end={1200} duration={2.5} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
