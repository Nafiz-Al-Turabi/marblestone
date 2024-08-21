import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const AboutFAQs = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false)



    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };



    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };


    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };



    return (
        <div className='pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div className='lg:max-w-[1200px] mx-auto lg:flex px-6 lg:px-0 gap-10'>
                <div className='text-center lg:text-left'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl'>Owner FAQs</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue.</p>
                </div>
                <div>
                    <div className="w-full lg:w-[550px] xl:w-[776px] mx-auto mt-10 lg:mt-0">
                        <div className='shadow rounded-xl'>
                            <div className="border-b">
                                <button
                                    onClick={toggleAccordion}
                                    className="flex items-center justify-between w-full p-7 focus:outline-none"
                                >
                                    <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                        1. What are your management fees?
                                    </span>
                                    <span className="text-2xl font-medium">
                                        {isOpen ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                >
                                    <p className="p-7 text-gray-600">
                                    Management fees for real estate services typically range from 8% to 12% of the monthly rental income for property management, though rates can vary based on the property and services provided.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b">
                                <button
                                    onClick={toggleAccordion1}
                                    className="flex items-center justify-between w-full p-7 focus:outline-none"
                                >
                                    <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                        2. What is your realtor sale commission?
                                    </span>
                                    <span className="text-2xl font-medium">
                                        {isOpen1 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen1 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                >
                                    <p className="p-7 text-gray-600">
                                        Realtor commissions typically range from 5% to 6% of the home's sale price, though this can vary based on location and specific agreements.
                                    </p>
                                </div>
                            </div>
                            <div className="border-b">
                                <button
                                    onClick={toggleAccordion2}
                                    className="flex items-center justify-between w-full p-7 focus:outline-none"
                                >
                                    <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                        3. Which type of house do you take for promoting?
                                    </span>
                                    <span className="text-2xl font-medium">
                                        {isOpen2 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen2 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                >
                                    <p className="p-7 text-gray-600">
                                        For promoting, properties with desirable features like good location, modern updates, and appealing aesthetics generally attract more interest.
                                    </p>
                                </div>
                            </div>
                            <div className="border-0">
                                <button
                                    onClick={toggleAccordion3}
                                    className="flex items-center justify-between w-full p-7 focus:outline-none"
                                >
                                    <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                        4. What’s the average time to sale a house?
                                    </span>
                                    <span className="text-2xl font-medium">
                                        {isOpen3 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen3 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                >
                                    <p className="p-7 text-gray-600">
                                        The average time to sell a house typically ranges from 30 to 60 days, depending on market conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFAQs;