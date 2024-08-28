import React from 'react';
import banner from './../../assets/Images/banner3.png'
import FeaturedProperties from '../../PropertyComponents/FeaturedProperties/FeaturedProperties';
import NavbarBlack from '../../Shared/Navbar/NavbarBlack';

const PropertyCMS = () => {
    return (
        <div className='xl:p-6'>
            <NavbarBlack/>
            <div className='py-32'>
                <div className='xl:w-[1440px] mx-auto  lg:flex justify-between items-center mb-10 text-center lg:text-left space-y-3 m-6'>
                    <h1 className='lg:w-[422px] text-3xl lg:text-5xl xl:text-7xl font-medium'>Houses for sale or rent</h1>
                    <p className='lg:w-[472px] text-center'>Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.</p>
                </div>
                <div className="relative bg-cover xl:h-[550px] bg-black px-2 py-20 md:px-32 lg:p-40 rounded-2xl lg:rounded-3xl xl:relative mb-44 m-6"
                    style={{ backgroundImage: `url(${banner})` }}>

                    <form className='bg-white w-full  xl:w-[940px] mx-auto p-6 rounded-3xl xl:mt-72 mt-10'>
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
            </div>
            <div className='w-[1200px] mx-auto'>
                <FeaturedProperties />
            </div>
        </div>
    );
};

export default PropertyCMS;