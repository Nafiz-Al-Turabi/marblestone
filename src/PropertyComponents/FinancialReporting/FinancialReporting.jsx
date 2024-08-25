import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AgentSignature from '../../Shared/AgentSignature/AgentSignature';
import { FaCheck } from 'react-icons/fa';

const FinancialReporting = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 lg:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Financial Reporting</h1>
                <div className='xl:w-1/3'>
                    <p>We track your financials and reports to you monthly through our secure, advanced and fully automated web-based accounting system. With our detailed financial reporting tools, it's never been easier to keep tabs on your investment.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/QKLmyZ0/Rectangle-8196-3.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            {/* Some point */}
            <div className='mt-28'>
                <div className="p-6 xl:w-[1440px] mx-auto">
                    <div className="md:flex space-y-6 md:space-y-0 md:space-x-6">
                        {/* First Column */}
                        <div className="flex-1 bg-white p-4 rounded-lg">
                            <p className='mb-4'>keep tabs on your investment</p>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" />All reports and tracking are further available at all times through the Owner Portal – just login and go!
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Convenience and self service for review of all statements
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Download owner statements & income reports
                                </li>
                            </ul>
                        </div>

                        {/* Second Column */}
                        <div className="flex-1 bg-white p-4 rounded-lg">
                            <p className='mb-4'>Log into your owner portal to view statements & more, such as:</p>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Rent collection and processing
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Payment of maintenance vendor bills
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Payment of monthly items at the request of owners
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Owner statement and direct deposit by ACH processing to 
                                    your bank account
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <AgentSignature />
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default FinancialReporting;