import React, { useEffect, useState } from 'react';
import PropertiesCard from '../../Cards/PropertiesCard';
import { IoPricetags } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaPlus, FaTag } from 'react-icons/fa';
import Navbar from '../../Shared/Navbar/Navbar';
import axiosInstance from '../../Axios/AxiosInstance';

const CmsSales = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/properties.json');
    //         if (!response.ok) {
    //             throw new Error('Oh no Not good...');
    //         }
    //         const data = await response.json();
    //         setProperties(data);
    //     } catch (error) {
    //         console.error('Properties Data not found: ', error);
    //     }
    // };

    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);
    }, []);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/properties');
            setProperties(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Properties Data not found: ', error);
        }
    };
    return (
        <div className='xl:p-6 '>
            <Navbar />
            <div className=' bg-black px-2 py-20 md:px-32 lg:p-40  xl:rounded-3xl xl:relative mb-44 '>
                <div className='text-center'>
                    <div className="flex justify-center ">
                        <button className="text-xs flex items-center text-white bg-gray-900 opacity-80 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <IoPricetags className="h-7 w-7 text-white bg-slate-500 rounded-full p-1" />
                            For sale
                        </button>
                    </div>
                    <div className='lg:w-[765px] mx-auto mt-4'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white mb-4'>Properties for sale</h1>
                        <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    </div>
                </div>
                <form className='bg-white w-full  xl:w-[940px] mx-auto p-6 rounded-3xl xl:-mb-72 mt-10'>
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

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-5 px-2 xl:px-0 mt-10'>
                    {properties.slice(0, 2).map(property => (
                        <div key={property._id} className="relative full overflow-hidden flex flex-col justify-between">
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
                                <Link to={`/propertyDetails/${property._id}`}>
                                    <h1 className="text-xl font-semibold hover:text-red-700 duration-300 ease-in-out mb-4">{property.title}</h1>
                                </Link>
                                <p className=" flex items-center">
                                    <MdLocationPin className='mr-2' />
                                    {property.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CmsSales;