import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import banner from './../../assets/Images/banner2.png'
import PropertiesCard from '../../Cards/PropertiesCard';

const LocationCMS = () => {
    return (
        <div className='lg:m-6 '>
            <div className="relative bg-cover bg-black px-2 py-20 md:px-32 lg:p-40  lg:rounded-3xl xl:relative mb-44"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className='text-center'>
                    <div className='lg:w-[765px] mx-auto mt-4'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white mb-4'>Properties in Chicago, IL</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    </div>
                </div>
                <form className='bg-white w-full  xl:w-[940px] mx-auto p-6 rounded-3xl xl:absolute left-1/4 mt-10'>
                    <div className='xl:flex gap-1 mb-4'>
                        <div className='xl:w-[40%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Search
                            </label>
                            <input type="text" className='w-full secondary-bg secodary-text p-[11px] focus:outline-none rounded-l-full' placeholder='Search for properties' />
                        </div>
                        <div className='xl:w-[20%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Min Rent
                            </label>
                            <input type="text" className='w-full secondary-bg secodary-text p-[11px] focus:outline-none' />
                        </div>
                        <div className='xl:w-[20%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Max Rent
                            </label>
                            <input type="text" className='w-full secondary-bg secodary-text p-[11px] focus:outline-none' />
                        </div>
                        <div className='xl:w-[10%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Bed
                            </label>
                            <select className='w-full secondary-bg secodary-text p-[14px] focus:outline-none'>
                                <option value="">Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                        <div className='xl:w-[10%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Bath
                            </label>
                            <select className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-r-full'>
                                <option value="">Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                        </div>
                    </div>
                    <div className='xl:flex gap-1'>
                        <div className='xl:w-[33.33%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Property Type
                            </label>
                            <select className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-l-full'>
                                <option value="">Any</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                        </div>
                        <div className='xl:w-[33.33%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Pets Policy
                            </label>
                            <select className='w-full secondary-bg secodary-text p-[14px] focus:outline-none'>
                                <option value="">Any</option>
                                <option value="allowed">Allowed</option>
                                <option value="not-allowed">Not Allowed</option>
                                <option value="negotiable">Negotiable</option>
                            </select>
                        </div>
                        <div className='xl:w-[33.33%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Sort
                            </label>
                            <select className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-r-full'>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="newest">Newest Listings</option>
                                <option value="oldest">Oldest Listings</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div className='xl:w-[1200px] mx-auto'>
                <div className='flex justify-center lg:justify-normal'>
                    <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                        <AiFillHome className='bg-white p-1   text-3xl text-slate-400 rounded-full mr-2 border-none' />
                        All properties
                    </button>
                </div>
                <div className='lg:flex justify-between items-center mb-10 mx-2 text-center lg:text-left space-y-3'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>All properties in Chicago</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-5 px-2 xl:px-0 mt-10'>
                    <PropertiesCard />
                    <PropertiesCard />
                    <PropertiesCard />
                    <PropertiesCard />
                </div>
            </div>

        </div>
    );
};

export default LocationCMS;