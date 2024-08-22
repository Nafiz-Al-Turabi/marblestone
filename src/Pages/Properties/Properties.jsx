import React from 'react';
import PropertyBanner from '../../PropertyComponents/PropertyBanner/PropertyBanner';
import { FaPlus, FaTag } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';

const Properties = () => {
    return (
        <div>
            <PropertyBanner />
            <div className='grid grid-cols-2 max-w-[1200px] mx-auto gap-5'>
                <div className="relative full overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/Fs6dLPs/Rectangle-11-2.png"
                            alt="Luxury Loft"
                            className="w-full  object-cover rounded-3xl"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none">
                            <FaPlus className="text-gray-800" />
                        </button>
                        <button className="flex items-center absolute top-2 left-2 p-2 bg-black text-white rounded-full shadow-md focus:outline-none">
                            <FaTag className="text-white mr-2" />
                            For rent
                        </button>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Luxury Loft in Chicago</h1>
                        <p className="flex items-center text-gray-600">
                            <MdLocationPin className='mr-2' />
                            2238 Stradella Rd, Chicago</p>
                    </div>
                </div>
                <div className="relative full overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/LtfgLpv/home-2.png"
                            alt="Luxury Loft"
                            className="w-full  object-cover rounded-3xl"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none">
                            <FaPlus className="text-gray-800" />
                        </button>
                        <button className="flex items-center absolute top-2 left-2 p-2 bg-black text-white rounded-full shadow-md focus:outline-none">
                            <FaTag className="text-white mr-2" />
                            For rent
                        </button>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Home in Chicago Heart</h1>
                        <p className="flex items-center text-gray-600">
                            <MdLocationPin className='mr-2' />
                            2596 El Segundo, Chicago
                        </p>
                    </div>
                </div>
                <div className="relative full overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/BNR66Kp/Rectangle-11-1.png"
                            alt="Luxury Loft"
                            className="w-full  object-cover rounded-3xl"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none">
                            <FaPlus className="text-gray-800" />
                        </button>
                        <button className="flex items-center absolute top-2 left-2 p-2 bg-black text-white rounded-full shadow-md focus:outline-none">
                            <FaTag className="text-white mr-2" />
                            For rent
                        </button>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Home in Chicago Heart</h1>
                        <p className="flex items-center text-gray-600">
                            <MdLocationPin className='mr-2' />
                            2596 El Segundo, Chicago
                        </p>
                    </div>
                </div>
                <div className="relative full overflow-hidden">
                    <div className="relative">
                        <img
                            src="https://i.ibb.co/BNR66Kp/Rectangle-11-1.png"
                            alt="Luxury Loft"
                            className="w-full  object-cover rounded-3xl"
                        />
                        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md focus:outline-none">
                            <FaPlus className="text-gray-800" />
                        </button>
                        <button className="flex items-center absolute top-2 left-2 p-2 bg-black text-white rounded-full shadow-md focus:outline-none">
                            <FaTag className="text-white mr-2" />
                            For rent
                        </button>
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-800">Home in Chicago Heart</h1>
                        <p className="flex items-center text-gray-600">
                            <MdLocationPin className='mr-2' />
                            2596 El Segundo, Chicago
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;