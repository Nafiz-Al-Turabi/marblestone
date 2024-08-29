import React, { useContext, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaSignOutAlt } from 'react-icons/fa';
import axiosInstance from '../../Axios/AxiosInstance';

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [agents, setAgents] = useState([]);
  const [properties, setProperties] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchProperies()
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/agents');
      if (response) {
        setAgents(response.data);
      }
    } catch (error) {
      console.log('error to get agents', error);
    }
  };
  const fetchProperies = async () => {
    try {
      const response = await axiosInstance.get('/Properties');
      if (response) {
        setProperties(response.data);
      }
    } catch (error) {
      console.log('error to get agents', error);
    }
  };

  // Limit to 4 agents for display
  const displayedAgents = agents.slice(0, 4);
  // Calculate how many more agents there are
  const additionalAgentsCount = agents.length > 4 ? agents.length - 4 : 0;

  return (
    <div className="">
      <div className='flex items-center space-x-2 justify-end mb-6'>
        <p className='text-lg font-semibold'>{user?.displayName}</p>
        <button onClick={toggleDropdown}>
          <img src={user?.photoURL} alt={user?.displayName || "User Avatar"} className='w-10 h-10 rounded-full border border-gray-700' />
        </button>
        {isDropdownOpen && (
          <div className='absolute right-6 top-20 mt-2 w-56 bg-white shadow-lg rounded-md p-4'>
            <div>
              <h1 className='text-lg font-semibold '>Nafiz Al Turabi</h1>
              <p className='text-gray-400'>nafizalturabi@email.com</p>
            </div>
            <hr className='my-2 border-1 border-gray-100' />
            <div>
              <button onClick={handleLogout} className="flex items-center px-4 py-2 mt-2 text-gray-500 w-full bg-gray-50 hover:bg-gray-100 hover:text-gray-600 duration-300 ease-linear active:scale-95">
                <FaSignOutAlt className="mr-3" /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className='bg-sky-300 text-white p-10 inset-3 shadow-lg shadow-sky-500/50 rounded-md duration-700 select-none'>
          <h1 className='text-center text-base xl:text-xl font-bold'>Total Property</h1>
          <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
            <CountUp end={properties.length} duration={2.5} />
          </span>
        </div>
        <div className='bg-teal-300 text-white p-10 inset-3 shadow-lg shadow-teal-500/50 rounded-md duration-700 select-none'>
          <h1 className='text-center text-base xl:text-xl font-bold'>Total Agents</h1>
          <span className='block text-center text-6xl md:text-4xl lg:text-5xl 2xl:text-9xl font-extrabold'>
            <CountUp end={agents.length} duration={2.5} />
          </span>
          <div className='mt-6 flex md:block lg:flex gap-2 items-center'>
            <div className='flex -space-x-3'>
              {displayedAgents.map(agent => (
                <div key={agent._id} className='relative'>
                  <img src={agent.image} alt="" className='w-10 rounded-full border' />
                </div>
              ))}
              {additionalAgentsCount > 0 && (
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-white font-semibold'>
                  +{additionalAgentsCount}
                </div>
              )}
            </div>
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
