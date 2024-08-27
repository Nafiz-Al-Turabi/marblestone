import React, { useState } from 'react';
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from './../../assets/Images/logo.svg'
import ActiveLink from '../../Components/ActiveLink/ActiveLink';

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
                <ul className='flex space-x-6 text-gray-600'>
                    <li className='relative'>
                        <a href="#" onClick={toggleDropdown} className='flex items-center font-medium'>
                            Property Management <IoIosArrowDown />
                        </a>
                        {isDropdownOpen && (
                            <ul className='absolute bg-gray-100 mt-2 p-2 rounded shadow-lg'>
                                <li><Link to="/propertyManagement" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Property Management</Link></li>
                                <li><Link to="/properties" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Properties</Link></li>
                                <li><Link to="/propertyLocation" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'> Property Location</Link></li>
                                <li><Link to="/propertycms" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'> Property CMS</Link></li>
                                <li><Link to="/cmsSales" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>CMS Sales</Link></li>
                                <li><Link to="/agents" onClick={toggleDropdown} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Agents</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><ActiveLink to="/owner" className='font-medium'>Owners</ActiveLink></li>
                    <li><ActiveLink to="/g" className='font-medium'>Residents</ActiveLink></li>
                    <li><ActiveLink to="/gg" className='font-medium'>Rentals</ActiveLink></li>
                    <li><ActiveLink to="/ggg" className='font-medium'>Apply</ActiveLink></li>
                    <li><ActiveLink to="/resources" className='font-medium'>Resources</ActiveLink></li>
                    <li><ActiveLink to="/about" className='font-medium'>About</ActiveLink></li>
                    <li><ActiveLink to="/contact" className='font-medium'>Contact</ActiveLink></li>
                </ul>
                <button className='primary-btn flex items-center'>
                    Book a call
                    <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                </button>
            </div>

            {/* Mobile & Medium Device Navbar */}
            <div className='absolute xl:hidden flex justify-between items-center p-4  w-full'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <button onClick={toggleMobileMenu} className='text-gray-400 text-2xl'>
                    {isMobileMenuOpen ? '' : <IoIosMenu />}
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
                                <li><Link to="/propertyManagement" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Property Management</Link></li>
                                <li><Link to="/properties" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Properties</Link></li>
                                <li><Link to="/propertyLocation" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Property Location</Link></li>
                                <li><Link to="/propertycms" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Property CMS</Link></li>
                                <li><Link to="/cmsSales" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>CMS Sales</Link></li>
                                <li><Link to="/agents" onClick={toggleMobileMenu} className='block p-2 hover:bg-slate-300 rounded duration-300 ease-in'>Agents</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><ActiveLink to="/owner" onClick={toggleMobileMenu} className='font-medium'>Owners</ActiveLink></li>
                    <li><ActiveLink to="/gg" onClick={toggleMobileMenu} className='font-medium'>Residents</ActiveLink></li>
                    <li><ActiveLink to="/g" onClick={toggleMobileMenu} className='font-medium'>Rentals</ActiveLink></li>
                    <li><ActiveLink to="/gg" onClick={toggleMobileMenu} className='font-medium'>Apply</ActiveLink></li>
                    <li><ActiveLink to="/resources" onClick={toggleMobileMenu} className='font-medium'>Resources</ActiveLink></li>
                    <li><ActiveLink to="/about" onClick={toggleMobileMenu} className='font-medium'>About</ActiveLink></li>
                    <li><ActiveLink to="/contact" onClick={toggleMobileMenu} className='font-medium'>Contact</ActiveLink></li>
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
