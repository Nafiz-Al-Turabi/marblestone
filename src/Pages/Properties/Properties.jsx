import React, { useEffect, useState } from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import PropertiesCard from '../../Cards/PropertiesCard';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [search, setSearch] = useState('');
    const [minRent, setMinRent] = useState('');
    const [maxRent, setMaxRent] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [petsPolicy, setPetsPolicy] = useState('');
    const [sort, setSort] = useState('price-asc');

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        filterProperties();
    }, [search, minRent, maxRent, bed, bath, propertyType, petsPolicy, sort, properties]);

    const fetchData = async () => {
        try {
            const response = await fetch('properties.json');
            if (!response.ok) {
                throw new Error('Oh no Not good...');
            }
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.error('Properties Data not found: ', error);
        }
    }

    const filterProperties = () => {
        let filtered = properties;

        if (search) {
            filtered = filtered.filter(property =>
                property.title.toLowerCase().includes(search.toLowerCase()) ||
                property.location.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (minRent) {
            filtered = filtered.filter(property => parseInt(property.minRent) >= parseInt(minRent));
        }

        if (maxRent) {
            filtered = filtered.filter(property => parseInt(property.maxRent) <= parseInt(maxRent));
        }

        if (bed) {
            filtered = filtered.filter(property => parseInt(property.bed) === parseInt(bed));
        }

        if (bath) {
            filtered = filtered.filter(property => parseInt(property.bath) === parseInt(bath));
        }

        if (propertyType) {
            filtered = filtered.filter(property => property.propertyType === propertyType);
        }

        if (petsPolicy) {
            filtered = filtered.filter(property => property.petsPolicy === petsPolicy);
        }

        if (sort) {
            if (sort === 'price-asc') {
                filtered = filtered.sort((a, b) => parseInt(a.minRent) - parseInt(b.minRent));
            } else if (sort === 'price-desc') {
                filtered = filtered.sort((a, b) => parseInt(b.minRent) - parseInt(a.minRent));
            } else if (sort === 'newest') {
                filtered = filtered.sort((a, b) => b.id - a.id);
            } else if (sort === 'oldest') {
                filtered = filtered.sort((a, b) => a.id - b.id);
            }
        }

        setFilteredProperties(filtered);
    }
    return (
        <div className='xl:m-6'>
            <div className=' bg-black px-2 py-20 md:px-32 lg:p-40  xl:rounded-3xl xl:relative mb-44 '>
                <div className='text-center'>
                    <div className="flex justify-center ">
                        <button className="text-xs flex items-center text-white bg-gray-900 opacity-80 gap-1 justify-center p-2 rounded-full mb-4  ">
                            <AiFillHome className="h-7 w-7 text-white bg-slate-500 rounded-full p-1" />
                            Available for rent
                        </button>
                    </div>
                    <div className='lg:w-[765px] mx-auto mt-4'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-white mb-4'>Check on all properties we have available</h1>
                        <p className='secondary-text'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
                    </div>
                </div>
                <form className='bg-white w-full  xl:w-[940px] mx-auto p-6 rounded-3xl xl:-mb-72 mt-10'>
                    <div className='xl:flex gap-1 mb-4'>
                        <div className='xl:w-[40%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Search
                            </label>
                            <input
                                type="text"
                                className='w-full secondary-bg secodary-text p-[11px] focus:outline-none rounded-l-full'
                                placeholder='Search for properties'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className='xl:w-[20%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Min Rent
                            </label>
                            <input
                                type="text"
                                className='w-full secondary-bg secodary-text p-[11px] focus:outline-none'
                                value={minRent}
                                onChange={(e) => setMinRent(e.target.value)}
                            />
                        </div>
                        <div className='xl:w-[20%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Max Rent
                            </label>
                            <input
                                type="text"
                                className='w-full secondary-bg secodary-text p-[11px] focus:outline-none'
                                value={maxRent}
                                onChange={(e) => setMaxRent(e.target.value)}
                            />
                        </div>
                        <div className='xl:w-[10%]'>
                            <label className='block mb-4 font-semibold text-gray-600'>
                                Bed
                            </label>
                            <select
                                className='w-full secondary-bg secodary-text p-[14px] focus:outline-none'
                                value={bed}
                                onChange={(e) => setBed(e.target.value)}
                            >
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
                            <select
                                className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-r-full'
                                value={bath}
                                onChange={(e) => setBath(e.target.value)}
                            >
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
                            <select
                                className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-l-full'
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                            >
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
                            <select
                                className='w-full secondary-bg secodary-text p-[14px] focus:outline-none'
                                value={petsPolicy}
                                onChange={(e) => setPetsPolicy(e.target.value)}
                            >
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
                            <select
                                className='w-full secondary-bg secodary-text p-[14px] focus:outline-none rounded-r-full'
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-5 px-2 xl:px-0'>
                {filteredProperties.map((property) => (
                    <PropertiesCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;