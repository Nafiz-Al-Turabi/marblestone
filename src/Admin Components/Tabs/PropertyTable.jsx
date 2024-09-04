import React from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';

const PropertyTable = ({ index, property,handleDeleteProperty }) => {
    return (
        <tbody className="bg-sky-300 divide-y text-white divide-gray-200">
            <tr>
                <td className="py-3 px-4 text-sm ">{index + 1}</td>
                <td className="py-3 px-4">
                    <img src={property.image} alt="Agent Photo" className="w-12 h-12 rounded-full border border-gray-300" />
                </td>
                <td className="py-3 px-4 text-sm">{property.title}</td>
                <td className="py-3 px-4 text-sm">{property.description}</td>
                <td className="py-3 px-4 flex space-x-2">
                    <button className="text-sky-500 hover:text-sky-700  text-xl p-1 rounded-md hover:scale-105  bg-white transition duration-150 ease-in-out">
                        <IoPencil />
                    </button>
                    <button onClick={()=>handleDeleteProperty(property._id)} className="text-rose-500 hover:text-rose-700 text-xl p-1 rounded-md hover:scale-105  bg-white  transition duration-150 ease-in-out">
                        <IoTrash />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default PropertyTable;