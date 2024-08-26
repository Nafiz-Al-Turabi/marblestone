import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AgentSignature from '../../Shared/AgentSignature/AgentSignature';
import { FaArrowRight } from 'react-icons/fa';

const Marketing = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 xl:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Marketing</h1>
                <div className='xl:w-1/3'>
                    <p>We offer a full range of property management services tailored to you as an investor, homeowner, or landlord. We have an extensive portfolio of single family homes, 2,3,4, flats in the south Chicago area.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/6YPfRDw/Rectangle-8196.png" alt="" className='w-full object-cover xl:rounded-2xl' />
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
                    {/* Section 1 */}
                    <div className="p-8 bg-white rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Leasing Specialist</h2>
                        <p className="text-gray-600">During the leasing process you will work with an assigned leasing professional whose only goal is to get your property marketed and get it rented quickly. During this time, you can expect us to be checking on your property and showing it to prospective tenants, as well as updating the listing on various websites, answering potential tenant questions and communicating with you. Our team will ensure that your property is presented in its best light online and in person to get you a great tenant.</p>
                    </div>

                    {/* Section 2 */}
                    <div className="p-8 bg-white rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Rental Market Analysis</h2>
                        <p className="text-gray-600">Pricing the home correctly is one of the most important factors in getting it rented quickly. Overpricing the home will cause the property to rent less quickly, costing you time and money.

                            We start with a competitive rental price analysis which combines market data with our professional knowledge of current market conditions to give you the most accurate rental price possible. This will get the home rented fast and for the most that the
                            market will bear.</p>
                    </div>

                    {/* Section 3 */}
                    <div className="p-8 bg-white rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Photos and Video Tours</h2>
                        <p className="text-gray-600">If your property doesn’t look good online then prospective tenants will not want to want to come view it in person. We take professional photos and video tours of our homes - In our experience properties that have professional photos get rented much faster.</p>
                    </div>

                    {/* Section 4 */}
                    <div className="p-8 bg-white rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Online Advertising Exposure</h2>
                        <p className="text-gray-600">We market your property through our property management software called Appfolio. It then syndicates the listing out to several websites, including all the popular rental sites like Zillow and Trulia.</p>
                        <div className="mt-4">
                            <button className='primary-btn flex items-center mt-6'>
                                Get started
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
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

export default Marketing;