import React from 'react';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import AgentSignature from '../../Shared/AgentSignature/AgentSignature';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const TenantScreening = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 lg:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Tenant Screening</h1>
                <div className='xl:w-1/3'>
                    <p>We strive to get your investment rented quickly, but feel it is important to get the RIGHT tenant versus the FAST tenant! Spending time up front and finding the BEST tenant for your rental creates a good experience all around, versus one that is stressful and frustrating.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/hXv6Jky/Rectangle-8196-1.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
                {/* Section 3 */}
                <div className="p-8 bg-white rounded-lg">
                    <p className="text-gray-600">If your property doesn’t look good online then prospective tenants will not want to want to come view it in person. We take professional photos and video tours of our homes - In our experience properties that have professional photos get rented much faster.</p>
                    <ul className="list-none space-y-2 mt-6">
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Creadit check
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Employment verification
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Debt to income ratio
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Previous landlord calls
                        </li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="p-8 bg-white rounded-lg flex flex-col justify-between">
                    <p className="text-gray-600">We market your property through our property management software called Appfolio. It then syndicates the listing out to several websites, including all the popular rental sites like Zillow and Trulia.</p>
                    <div className="mt-4">
                        <button className='primary-btn flex items-center mt-6'>
                            Get started
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                    </div>
                </div>
            </div>

            <AgentSignature />
            <AreaLocation />
            <InquiryForm />
        </div>
    );
};

export default TenantScreening;