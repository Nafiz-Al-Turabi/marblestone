import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import { FaCheck } from 'react-icons/fa';

const Overview = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 lg:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Chicago Property Management</h1>
                <div className='xl:w-1/3'>
                    <h1 className='text-3xl mb-4'>Let Us Manage Your Chicago Rental Property</h1>
                    <p>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/fxYwfDJ/Rectangle-2-3.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            {/* Some point */}
            <div className='mt-28'>
                <div className="p-6 xl:w-[1440px] mx-auto">
                    <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 ">
                        {/* First Column */}
                        <div className="flex-1 bg-white p-4 rounded-lg">
                            <h2 className="text-xl lg:text-3xl font-semibold mb-4">The Benefits of using Marblestone Property Group LLC</h2>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" />No hassle management
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Automated owner statements
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Online Owner Portal Access
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Industry leading marketing tools
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> 24/7 maintenance request handling
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Prompt Response to Tenant Requests
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Low vacancy rate
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Low time on market
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Industry specific local knowledge
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Connections with Private lending for you to expand
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Tax appeal experts
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Insurance discounts
                                </li>
                            </ul>
                        </div>

                        {/* Second Column */}
                        <div className="flex-1 bg-white p-4 rounded-lg">
                            <h2 className="text-xl lg:text-3xl font-semibold mb-4">What we do as your Chicago property manager</h2>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Fill vacancies
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Advertise your rental
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Handle tenant inquiries
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Background and credit investigations
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Application processing
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Lease signing
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Full service repair
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Rent collection
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Accounting
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Coordinate Evictions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Video */}
            <div className='xl:w-[1440px] mx-auto mt-16'>
                Video will be here
            </div>
            <div>
                <AreaLocation />
                <InquiryForm />
            </div>
        </div>
    );
};

export default Overview;