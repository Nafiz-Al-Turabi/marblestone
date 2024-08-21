import React from 'react';
import { FaNewspaper, FaBook } from 'react-icons/fa';
import { MdOutlineSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendar3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const LatestBlog = () => {
    return (
        <div className="p-4 mt-40">
            <div>
                <div className="lg:flex justify-between items-center mb-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center md:text-left">Latest Post</h1>
                    <div className="flex flex-wrap md:flex  space-x-4 md:bg-white p-2 md:p-3 rounded-full">
                        <button className="flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-black text-white">
                            <MdOutlineSettings className="text-lg" />
                            <span>All</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-gray-700">
                            <MdOutlineSettings className="text-lg" />
                            <span>Resources</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-gray-700">
                            <FaNewspaper className="text-lg" />
                            <span>New</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-gray-700">
                            <FaBook className="text-lg" />
                            <span>Articles</span>
                        </button>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div>
                        <div className='h-96 overflow-hidden relative rounded-3xl'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/465/187/652/soccer-lionel-messi-argentina-national-football-team-hd-wallpaper-preview.jpg" alt="blog image" className='object-cover w-full h-full' />
                        </div>
                        <h1 className='text-2xl my-6 font-medium'>No money, no honey!🍯</h1>
                        <div className='flex justify-between'>
                            <p className='flex justify-center text-gray-500'>
                                <BsCalendar3 className='mr-2 text-xl' />
                                Mar 30, 2025
                            </p>
                            <Link to='/' className='flex items-center '>Read more
                                <IoIosArrowForward className='ml-2' />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='h-96 overflow-hidden relative rounded-3xl'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/465/187/652/soccer-lionel-messi-argentina-national-football-team-hd-wallpaper-preview.jpg" alt="blog image" className='object-cover w-full h-full' />
                        </div>
                        <h1 className='text-2xl my-6 font-medium'>No money, no honey!🍯</h1>
                        <div className='flex justify-between'>
                            <p className='flex justify-center text-gray-500'>
                                <BsCalendar3 className='mr-2 text-xl' />
                                Mar 30, 2025
                            </p>
                            <Link to='/' className='flex items-center '>Read more
                                <IoIosArrowForward className='ml-2' />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='h-96 overflow-hidden relative rounded-3xl'>
                            <img src="https://c4.wallpaperflare.com/wallpaper/465/187/652/soccer-lionel-messi-argentina-national-football-team-hd-wallpaper-preview.jpg" alt="blog image" className='object-cover w-full h-full' />
                        </div>
                        <h1 className='text-2xl my-6 font-medium'>No money, no honey!🍯</h1>
                        <div className='flex justify-between'>
                            <p className='flex justify-center text-gray-500'>
                                <BsCalendar3 className='mr-2 text-xl' />
                                Mar 30, 2025
                            </p>
                            <Link to='/' className='flex items-center '>Read more
                                <IoIosArrowForward className='ml-2' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between space-x-2 mt-10">
                    <button
                        disabled
                        className="flex items-center justify-center p-2 border border-gray-300 rounded-full text-white bg-black disabled:bg-white disabled:text-black"
                    >
                        <FaChevronLeft />
                    </button>

                    <span className="text-gray-700">
                        1 / 6
                    </span>

                    <button
                        className="flex items-center justify-center p-2 border border-gray-300 rounded-full text-white bg-black "
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;
