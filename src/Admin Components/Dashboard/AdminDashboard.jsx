import React, { useState } from 'react';
import { FaChevronDown, FaHome, FaPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col flex-grow px-4 space-y-5">
            <Link to="/admin" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white shadow shadow-white/5 rounded-lg">
                <FaHome className="mr-3" /> Dashboard
            </Link>
            <Link to="/admin/addProperties" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white shadow shadow-white/5 rounded-lg">
                <FaPlus className="mr-3" /> Add Property
            </Link>
            <Link to="/admin/addAgent" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white shadow shadow-white/5 rounded-lg">
                <FaUser className="mr-3" /> Add Agent
            </Link>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-4 py-2 w-full shadow shadow-white/5 rounded-lg"
                >
                    <FaUser className="mr-3" /> Users
                    <span
                        className={`ml-auto transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                    >
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`transition-all bg-slate-500 duration-300 ease-in-out overflow-hidden rounded mt-2 ${isOpen ? 'max-h-screen' : 'max-h-0'
                        }`}
                >
                    <Link
                        to="/admin/messages"
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        Message
                    </Link>
                    <Link
                        to="/admin/users"
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                        users
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default AdminDashboard;