import React, { useEffect, useState } from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PropertiesCard = ({ property }) => {
    const { image, title, location, _id } = property;
    return (
        <div className="relative full overflow-hidden flex flex-col justify-between ">
            <div className="relative">
                <img
                    src={image}
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
                <Link to={`/propertyDetails/${_id}`}>
                    <h1 className="text-xl font-semibold hover:text-red-700 duration-300 ease-in-out ">{title}</h1>
                </Link>
                <p className="flex items-center ">
                    <MdLocationPin className='mr-2' />
                    {location}
                </p>
            </div>
        </div>
    );
};

export default PropertiesCard;