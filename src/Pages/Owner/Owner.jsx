import React from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Owner = () => {
    return (
        <div className='xl:m-6'>
            <div className='bg-black px-4 py-20 md:px-8 lg:px-16 xl:px-32 lg:py-24 xl:py-32 xl:rounded-2xl'>
                <div className='text-center'>
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl  text-white mb-4'>
                            Owner Resources
                        </h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:w-[1440px] mx-auto'>
                <h1 className='text-xl md:text-3xl lg:text-5xl my-14 mx-2 lg:mx-0'>Info You Need</h1>
                <div className='lg:flex gap-6 mx-2 '>
                    <div className='lg:w-2/5 space-y-4 lg:space-y-6'>
                        <img src="https://i.ibb.co/mzfBWv4/Rectangle-8201-1.png" alt="" className='w-full' />
                        <div className='bg-white p-6 lg:p-8 rounded-3xl'>
                            <h1 className='text-2xl mb-6'>Resources & Forms</h1>
                            <div className='space-y-3  ml-6 '>
                                <p className='flex items-center text-blue-400'>
                                    <BsLink45Deg className='mr-3' />
                                    Example Management Agreement
                                </p>
                                <p className='flex items-center'>
                                    <HiDownload className='mr-3 text-green-400' />
                                    Example Management Agreement
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between lg:w-3/5 '>
                        <div className='space-y-6 mx-2 text-justify lg:text-left my-6 lg:my-0'>
                            <p>To our future client:</p>
                            <p>Much like using a good accountant or financial planner, a good property manager will protect your investment, provide professional service, reduce costs and increase your income.</p>
                            <p>Marblestone Property Group can work with with you to align your strategy with focus and care, just like we would our own investment to ensure long-term sustainability and growth.</p>
                            <p>Marblestone Property Group was started by an owner and is designed to focus on the owner. We love to hear that our owners worry less once they let us care for their investment and that they are doing better once they have joined our services.</p>
                            <p>Since 2013, Marblestone Property Group has been specializing in property management. We o er our clients a low property to manager ratio, as well as a high level of professional and personalized service. We provide 24 hour support, so whether we are onsite or off , our team is readily available to provide assistance. Your success is our business.</p>
                            <div>
                                <p>Sincerely,</p>
                                <p>Jared Kott, Managing Partne</p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <button className='primary-btn flex items-center mt-6'>
                                Owner Portal
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                            <button className='primary-btn flex items-center mt-6'>
                                Our Services
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
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
        </div>
    );
};

export default Owner;