import React, { useState } from 'react';
import { FaChevronDown, FaHome, FaPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-col flex-grow px-4 space-y-5">
            <Link to="/admin" className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white shadow shadow-white/5 rounded-lg">
                <FaHome className="mr-3" /> Dashboard
            </Link>
        </nav>
    );
};

export default UserDashboard;