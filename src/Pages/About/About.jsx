import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import image2 from './../../assets/AboutImages/image2.png'
import image1 from './../../assets/AboutImages/image1.png'
import CountUp from 'react-countup'; // Import CountUp
import OurValues from '../../AboutComponents/OurValues/OurValues';
import OurMission from '../../AboutComponents/OurMission/OurMission';



const About = () => {
    return (
        <div className=' pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div>
                <div className='lg:max-w-[1200px] mx-auto lg:flex px-6 lg:px-0'>
                    <div className=''>
                        <h1 className='text-center lg:text-left text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium'>Marblestone Property Group</h1>
                    </div>
                    <div className='lg:w-1/2 mt-4 '>
                        <p className='text-justify md:text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ut expedita vero reiciendis, distinctio corrupti. Amet obcaecati maxime excepturi impedit!</p>
                        <div className='flex justify-center lg:justify-normal mt-4'>
                            <button className='primary-btn flex items-center'>
                                CTA 1
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                            <button className=' flex items-center ml-5'>
                                CTA 2
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex gap-5 mt-12'>
                    <div>
                        <img src={image2} alt="" className='w-full lg:rounded-3xl lg:w-[696px]' />
                        <div className=" text-center lg:text-left 2xl:flex space-x-2 mr-5 space-y-4 lg:space-y-0 my-10 xl:ml-16">
                            <div>
                                <h3 className="text-[18px]">Stat 1</h3>
                                <p className="text-5xl 2xl:text-7xl my-[6px]">
                                    <CountUp end={10} suffix="k+" />
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi!</p>
                            </div>
                            <div>
                                <h3 className="text-[18px]">Stat 2</h3>
                                <p className="text-5xl 2xl:text-7xl my-[6px]">
                                    <CountUp end={200} prefix=" " suffix="k" />
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eligendi!</p>
                            </div>
                        </div>
                    </div>
                    <div className=' overflow-hidden relative'>
                        <img src={image1} alt="" className='w-full lg:h-[662px] lg:rounded-3xl object-cover' />
                    </div>
                </div>
            </div>
            <OurValues />
            <OurMission />
        </div>
    );
};

export default About;