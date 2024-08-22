import React, { useState } from 'react';
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from './../../assets/Images/logo.svg'

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='absolute  z-20 w-full xl:px-4 '>
            {/* Desktop Navbar */}
            <div className='hidden xl:flex xl:max-w-[1440px] mx-auto  justify-between items-center p-4'>
                <div className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <ul className='flex space-x-6 text-white'>
                    <li className='relative'>
                        <a href="#" onClick={toggleDropdown} className='flex items-center font-medium'>
                            Property Management <IoIosArrowDown />
                        </a>
                        {isDropdownOpen && (
                            <ul className='absolute bg-gray-100 mt-2 p-2 rounded shadow-lg'>
                                <li><Link to="/properties" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Properties</Link></li>
                                <li><a href="#" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Add New Property</a></li>
                                <li><Link to="/agents" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Agents</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/" className='font-medium'>Owners</Link></li>
                    <li><a href="#" className='font-medium'>Residents</a></li>
                    <li><a href="#" className='font-medium'>Rentals</a></li>
                    <li><a href="#" className='font-medium'>Apply</a></li>
                    <li><a href="#" className='font-medium'>Resources</a></li>
                    <li><Link to="/about" className='font-medium'>About</Link></li>
                    <li><a href="#" className='font-medium'>Contact</a></li>
                </ul>
                <button className='primary-btn flex items-center'>
                    Book a call
                    <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                </button>
            </div>

            {/* Mobile & Medium Device Navbar */}
            <div className='absolute xl:hidden flex justify-between items-center p-4  w-full'>
                <img src={logo} alt="Logo" />
                <button onClick={toggleMobileMenu} className='text-black text-2xl'>
                    {isMobileMenuOpen ? '': <IoIosMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={` xl:hidden fixed top-0 right-0 h-full w-2/3 bg-white p-4 transform transition-transform duration-300 ease-in-out z-30 pt-20 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <ul className='space-y-4 text-black'>
                    <li className='relative'>
                        <a href="#" onClick={toggleDropdown} className='flex items-center font-medium'>
                            Property Management <IoIosArrowDown />
                        </a>
                        {isDropdownOpen && (
                            <ul className='bg-gray-100 mt-2 p-2 rounded shadow-lg'>
                                <li><a href="#" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Manage Properties</a></li>
                                <li><a href="#" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Add New Property</a></li>
                                <li><Link to="/agents" className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Agents</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/" className='font-medium'>Owners</Link></li>
                    <li><a href="#" className='font-medium'>Residents</a></li>
                    <li><a href="#" className='font-medium'>Rentals</a></li>
                    <li><a href="#" className='font-medium'>Apply</a></li>
                    <li><a href="#" className='font-medium'>Resources</a></li>
                    <li><Link to="/about" className='font-medium'>About</Link></li>
                    <li><a href="#" className='font-medium'>Contact</a></li>
                </ul>
                <button className='primary-btn flex items-center mt-6'>
                    Book a call
                    <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                </button>
                <button onClick={toggleMobileMenu} className='absolute top-5 right-5 text-black text-2xl z-40 '>
                    <FaTimes />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
