import React, { useContext, useState } from 'react';
import { FaBars, FaHome, } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import AdminDashboard from '../Admin Components/Dashboard/AdminDashboard';

const Admin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-gray-800 text-white flex flex-col z-50`}>
                <div className="px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Admin Panel</h1>
                    <button className="md:hidden text-black z-20" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </div>
                <AdminDashboard />
                <div className="px-4 py-4">
                    <Link to='/' className="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white w-full">
                        <FaHome className="mr-3" /> Home
                    </Link>
                </div>
            </aside>

            {/* Main content area */}
            <div className="flex-grow p-6 bg-gray-100 ml-0  transition-all duration-300 ease-in-out">
                <header className="md:hidden p-4 bg-white shadow">
                    <button className="md:hidden text-gray-800" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                </header>
                <main className="mt-6">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default Admin;
