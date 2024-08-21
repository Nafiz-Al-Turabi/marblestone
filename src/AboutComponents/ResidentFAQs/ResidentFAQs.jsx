import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const ResidentFAQs
    = () => {
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
                        <h1 className='text-3xl md:text-4xl lg:text-5xl'>Resident FAQs</h1>
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
                                            How do I submit a maintenance request?
                                        </span>
                                        <span className="text-2xl font-medium">
                                            {isOpen ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                    >
                                        <p className="p-7 text-gray-600">
                                            To submit a maintenance request, use the property management's online portal, call or email your property manager with details, and follow up as needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b">
                                    <button
                                        onClick={toggleAccordion1}
                                        className="flex items-center justify-between w-full p-7 focus:outline-none"
                                    >
                                        <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                            What should I do if I lose my keys?
                                        </span>
                                        <span className="text-2xl font-medium">
                                            {isOpen1 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen1 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                    >
                                        <p className="p-7 text-gray-600">
                                            If you lose your keys, contact your landlord or property manager for a replacement, check if you have a spare set, and consider changing locks for security if needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-b">
                                    <button
                                        onClick={toggleAccordion2}
                                        className="flex items-center justify-between w-full p-7 focus:outline-none"
                                    >
                                        <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                            How can I pay my rent?
                                        </span>
                                        <span className="text-2xl font-medium">
                                            {isOpen2 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen2 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                    >
                                        <p className="p-7 text-gray-600">
                                            You can pay your rent through various methods, such as online payment via a landlord’s portal, bank transfer, check, or direct deposit. Check your lease agreement or ask your landlord for the preferred payment options.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-0">
                                    <button
                                        onClick={toggleAccordion3}
                                        className="flex items-center justify-between w-full p-7 focus:outline-none"
                                    >
                                        <span className="text-xl 2xl:text-2xl font-medium text-gray-800 text-left">
                                            What are the rules regarding pets in the property?
                                        </span>
                                        <span className="text-2xl font-medium">
                                            {isOpen3 ? <FaMinus className='h-8 w-8 bg-black rounded-full text-white p-1.5' /> : <FaPlus className='h-8 w-8 p-1.5' />}
                                        </span>
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen3 ? 'max-h-screen duration-1000' : 'max-h-0'}`}
                                    >
                                        <p className="p-7 text-gray-600">
                                            Rules regarding pets in a property vary by landlord or property management and may include restrictions on types or sizes of pets, additional pet deposits or fees, and specific care guidelines. Check your lease agreement or ask your landlord for details.
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

export default ResidentFAQs;