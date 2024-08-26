import React from 'react';
import AreaLocation from '../../Shared/AreaLocation/AreaLocation';
import InquiryForm from '../../Shared/InquiryForm/InquiryForm';
import AgentSignature from '../../Shared/AgentSignature/AgentSignature';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const Maintenance = () => {
    return (
        <div>
            <div className='xl:flex justify-between items-center xl:gap-28 mx-2 lg:mx-0'>
                <h1 className='xl:w-1/2 text-2xl md:text-3xl lg:text-5xl xl:text-7xl'>Maintenance</h1>
                <div className='xl:w-1/3'>
                    <p>We know that a well-maintained home results in quicker rentals, lower turnovers, and in general, happier tenants! We offer our residents a secure portal to submit all maintenance issues, which can be accessed online with a simple click. Our Vendors are trustworthy and very quick to respond. We coordinate and communicate with the tenants, with you, and vendor for our maintenance scenarios. Protecting and maintaining your home and your investment is a top priority for us.</p>
                </div>
            </div>
            <div className='mt-16'>
                <img src="https://i.ibb.co/MntSCmG/Rectangle-8196-2.png" alt="" className='w-full object-cover rounded-2xl' />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-32">
                {/* Section 3 */}
                <div className="p-8 bg-white rounded-lg">
                    <p className="text-gray-600">How this benifits you</p>
                    <ul className="list-none space-y-2 mt-6">
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />We offer quality repairs at competitive prices
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />You can rest easy knowing your home is protected nights, weekends and holidays
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Accurate billing so you can keep track of your investment
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />Prompt response to protect your property and keep your
                            tenants happy
                        </li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="p-8 bg-white rounded-lg flex flex-col justify-between">
                    <p className="text-gray-600">Vendor bills and receipts are emailed monthly with Owner Statements and are also available through our online Owner Portal.</p>
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

export default Maintenance;