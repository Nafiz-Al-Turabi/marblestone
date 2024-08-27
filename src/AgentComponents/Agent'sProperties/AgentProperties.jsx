import React, { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaPlus, FaTag } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropertiesCard from '../../Cards/PropertiesCard';
import AgentBlog from '../Agent\'sBlog/AgentBlog';

const AgentProperties = ({ name }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/properties.json');
            if (!response.ok) {
                throw new Error('Oh no Not good...');
            }
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.error('Properties Data not found: ', error);
        }
    };

    return (
        <div className='mt-56 lg:mx-6'>
            <div className='bg-black px-2 py-20 md:px-24 lg:p-40 lg:rounded-3xl xl:relative mb-44'>
                <button className='bg-[#202127] flex items-center text-white pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                    <AiFillHome className='bg-[#464851] p-1 text-3xl text-white rounded-full mr-2 border-none' />
                    All properties
                </button>
                <div className='md:flex justify-between mb-10 mx-2 text-white'>
                    <h1 className='text-3xl lg:text-5xl font-medium mb-4'>Properties in charge of {name}</h1>
                    <Link to='/properties' className='flex items-center'>
                        All Properties
                        <IoIosArrowForward className='ml-2' />
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 px-2 xl:px-0'>
                    {properties.slice(0, 2).map(property => (
                        <div key={property.id} className="relative full overflow-hidden flex flex-col justify-between">
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt="Luxury Loft"
                                    className="w-full h-96 object-cover rounded-3xl"
                                />
                                <Link to='' className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none">
                                    <FaPlus className="text-gray-800" />
                                </Link>
                                <button className="flex items-center absolute top-2 left-2 p-2 bg-black text-white rounded-full shadow-md focus:outline-none">
                                    <FaTag className="text-white mr-2" />
                                    For rent
                                </button>
                            </div>
                            <div className="p-4 text-black">
                                <Link to={`/propertyDetails/${property.id}`}>
                                    <h1 className="text-white text-xl font-semibold hover:text-red-700 duration-300 ease-in-out mb-4">{property.title}</h1>
                                </Link>
                                <p className="text-white flex items-center">
                                    <MdLocationPin className='mr-2' />
                                    {property.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AgentBlog name={name} />
        </div>
    );
};

export default AgentProperties;
