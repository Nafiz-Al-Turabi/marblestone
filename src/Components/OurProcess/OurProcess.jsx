import { RiHome2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import image from './../../assets/Images/process.png';
import image2 from './../../assets/Images/process2.png';
import { useState } from "react";

const OurProcess = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mx-2">
            <div className="flex justify-center">
                <button className='bg-slate-100 flex items-center text-black pl-2 pr-4 py-[6px] rounded-full mb-4 pointer-events-none'>
                    <RiHome2Fill className='bg-white text-2xl p-1 text-slate-400 rounded-full mr-2 border-none' />
                    Our process
                </button>
            </div>
            <div className="w-full lg:w-[546px] mx-auto mb-8">
                <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-medium mb-4">Find your dream house as easy as 1, 2, 3</h1>
                <p className="text-center text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between mb-16">
                <div className="w-full lg:w-[537px] mx-auto mt-10">
                    <div className="border-b bg-white shadow rounded-2xl">
                        <button
                            onClick={toggleAccordion}
                            className="flex items-center justify-between w-full p-4 focus:outline-none"
                        >
                            <span className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-800 text-left">1. Search for your favorite house in your location</span>
                            <span className="text-2xl font-medium">
                                {isOpen ? '-' : '+'}
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen duration-1000' : 'max-h-0'
                                }`}
                        >
                            <p className="p-4 text-gray-600 text-sm lg:text-base">
                                Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative space-y-6">
                    <div>
                        <img src={image} alt="Process" className="w-full hidden lg:block" />
                    </div>
                    <div className="w-full lg:w-[360px] bg-[#f7f7f7] p-6 rounded-3xl shadow lg:absolute lg:top-1/3 lg:-right-1/4">
                        <form className="relative mb-3">
                            <input type="text" placeholder='Choose your location' className="bg-[#fafafb] py-3 px-4 w-full rounded-full focus:outline-none" />
                            <button className='absolute top-2 right-2'>
                                <IoIosSearch className='bg-black text-xl text-white p-1 w-[28px] h-[28px] rounded-full ml-2' />
                            </button>
                        </form>
                        <div className="mb-4">
                            <img src={image2} alt="Property" className="w-full" />
                            <h1 className="text-xs lg:text-sm">Luxury Loft in San Francisco</h1>
                            <p className="text-xs secondary-text flex items-center">
                                <IoLocation className="mr-2" />
                                2238 Stradella Rd, SF
                            </p>
                        </div>
                        <div className="mb-4">
                            <img src={image2} alt="Property" className="w-full" />
                            <h1 className="text-xs lg:text-sm">Luxury Loft in San Francisco</h1>
                            <p className="text-xs secondary-text flex items-center">
                                <IoLocation className="mr-2" />
                                2238 Stradella Rd, SF
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
