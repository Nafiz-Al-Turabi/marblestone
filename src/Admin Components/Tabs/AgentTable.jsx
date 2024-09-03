import React from 'react';
import { IoPencil, IoTrash } from 'react-icons/io5';

const AgentTable = ({ agent, index ,handleDelete}) => {
    return (
        <tbody className="bg-teal-300 divide-y divide-gray-200">
            <tr>
                <td className="py-3 px-4 text-sm text-white">{index + 1}</td>
                <td className="py-3 px-4">
                    <img src={agent.image} alt="Agent Photo" className="w-12 h-12 rounded-full border border-gray-300" />
                </td>
                <td className="py-3 px-4 text-sm text-white">{agent.name}</td>
                <td className="py-3 px-4 text-sm text-white">{agent.email}</td>
                <td className="py-3 px-4 flex space-x-2">
                    <button className="text-sky-500 bg-white text-xl p-1 rounded-md hover:scale-105  hover:text-sky-700 transition duration-150 ease-in-out">
                        <IoPencil />
                    </button>
                    <button onClick={handleDelete} className="text-rose-500 bg-white text-xl p-1 rounded-md hover:scale-105  hover:text-rose-700 transition duration-150 ease-in-out">
                        <IoTrash />
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default AgentTable;


