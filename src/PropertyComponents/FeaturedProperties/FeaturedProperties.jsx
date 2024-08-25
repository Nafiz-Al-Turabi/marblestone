import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaKey, FaPlus } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { RiStarFill } from 'react-icons/ri';
import PropertiesCard from '../../Cards/PropertiesCard';

const slides = [
    {
        img: 'https://i.ibb.co/LtfgLpv/home-2.png',
        title: 'Luxury Loft in San Francisco',
        description: 'Lorem ipsum dolor sit amet consectetur tellus eu enim ultrices imperdiet faucibus elementum.',
        location: '2238 Stradella Rd, SF',
    },
    {
        img: 'https://i.ibb.co/Fs6dLPs/Rectangle-11-2.png',
        title: 'Modern Apartment in New York',
        description: 'Vivamus tristique mi vitae urna cursus, ac ultrices purus tristique.',
        location: '1234 Broadway, NY',
    },
    {
        img: 'https://i.ibb.co/Fs6dLPs/Rectangle-11-2.png',
        title: 'Modern Apartment in New York',
        description: 'Vivamus tristique mi vitae urna cursus, ac ultrices purus tristique.',
        location: '1234 Broadway, NY',
    },
];

const FeaturedProperties = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div>
                <div className="flex justify-center">
                    <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                        <RiStarFill className='bg-white text-2xl p-1 text-slate-400 rounded-full mr-2 border-none' />
                        Featured properties
                    </button>
                </div>
                <div className="lg:w-[546px] mx-auto mb-8 text-center">
                    <h1 className="text-3xl 2xl:text-5xl font-medium mb-4">Featured properties</h1>
                    <p className="secondary-text">Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id.</p>
                </div>
            </div>

            {/* Slider */}
            <div className='relative overflow-hidden w-full'>
                <div
                    className='flex transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(calc(-${activeIndex} * (80% + 20px)))`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out ${index === activeIndex ? 'scale-100 shadow-lg' : 'scale-95'}`}
                            style={{
                                width: index === activeIndex ? '80%' : '80%',
                                marginRight: index !== slides.length - 1 ? '20px' : '0',
                            }}
                            onClick={() => handleSlideClick(index)}
                        >
                            <img src={slide.img} alt={slide.title} className='w-full h-[440px] object-cover rounded-lg' />
                            <div className='absolute top-5 right-5'>
                                <button className='bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200 focus:outline-none' aria-label="Add to favorites">
                                    <FaPlus className='text-xl' />
                                </button>
                            </div>
                            <div className='absolute top-5 left-5'>
                                <button className='flex items-center bg-white text-black text-xs rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none' aria-label="Property status: For Rent">
                                    <FaKey className='mr-2' />
                                    For Rent
                                </button>
                            </div>
                            <div className='absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent p-5 w-full text-white rounded-b-lg'>
                                <h1 className='text-2xl font-bold mb-2'>{slide.title}</h1>
                                <p className='mb-4'>{slide.description}</p>
                                <p className='flex items-center'>
                                    <FaLocationPin className='text-yellow-400 mr-2' />
                                    <span>{slide.location}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-40'>
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
                    <PropertiesCard/>
                    <PropertiesCard/>
                    <PropertiesCard/>
                    <PropertiesCard/>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties;
