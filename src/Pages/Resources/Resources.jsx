import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../Shared/Navbar/Navbar';

const Resources = () => {
    return (
        <div className='xl:p-6'>
            <Navbar/>
            <div className='bg-black px-4 py-20 md:px-8 lg:px-16 xl:px-32 lg:py-24 xl:py-32 xl:rounded-2xl'>
                <div className='text-center'>
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl  text-white mb-4'>
                            Resident Resources
                        </h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:w-[1440px] mx-auto'>
                <h1 className='text-xl md:text-3xl lg:text-5xl my-14 mx-2 lg:mx-0'>Tenant Resources</h1>
                <div className='lg:flex justify-between bg-white p-10 gap-16 rounded-3xl'>
                    <div className=' lg:w-2/5'>
                        <h1 className='text-xl md:text-3xl mb-10'>Prospective Tenants</h1>
                        <h3 className='text-lg md:text-xl mb-4'>Find Your Perfect Home</h3>
                        <p>If you are in the market for your perfect rental home, you have come to the right place. As a prospective tenant, we can help you through the process of finding and applying for the home of your dreams. Once you are a resident, we have a suite of tools to make your rental experience the best it can be.</p>
                        <div>
                            <button className='primary-btn flex items-center mt-10'>
                                View Properties
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-3/5 mt-8 lg:mt-0'>
                        <h1 className='text-xl md:text-3xl mb-6'>Resources</h1>
                        <ul className='grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Qualifying</li>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Apply Online</li>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Sample Lease Agreement</li>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Tenant Handbook</li>
                        </ul>
                    </div>
                </div>
                <div className='lg:flex flex-row-reverse justify-between bg-white p-10 gap-16 rounded-3xl mt-8'>
                    <div className=' lg:w-2/5'>
                        <h1 className='text-xl md:text-3xl mb-10'>Current Residents</h1>
                        <h3 className='text-lg md:text-xl mb-4'>Resources to Make Your Stay Comfortable</h3>
                        <p>For our current residents we have a complete set of tools and procedures to make your stay with us more comfortable and rewarding. Use our website to submit any maintenance requests, pay your rent, or just to drop us a line. We love to hear from our residents.</p>
                        <div>
                            <button className='primary-btn flex items-center mt-10'>
                                Resident Portal
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </div>
                    </div>
                    <div className='xl:w-3/5 mt-8 lg:mt-0'>
                        <h1 className='text-xl md:text-3xl mb-6'>Link & Resources</h1>
                        <ul className='grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Pay Online</li>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Maintenance Request</li>
                            <li className='flex justify-center bg-slate-200 py-2 rounded-full'>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-20 lg:my-40'>
                <div className='lg:w-3/5 bg-white p-2 lg:px-24 lg:py-20 rounded-3xl mx-2'>
                    <h1 className='text-center text-5xl'>Have a Question?</h1>
                    <div className='flex justify-center gap-6'>
                        <button className='primary-btn flex items-center mt-6'>
                            Owner FAQs
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                        <button className='primary-btn flex items-center mt-6'>
                            Contact Us
                            <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;