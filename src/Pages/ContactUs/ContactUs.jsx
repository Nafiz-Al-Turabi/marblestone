import React from 'react';
import { FaArrowRight, FaPen, FaUser } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className=' pt-20 lg:pt-40 lg:px-4 mb-20'>
            <div className='2xl:w-[1440px] mx-auto '>
                <div className='xl:flex justify-between xl:gap-24'>
                    <div className='lg:w-full 2xl:w-[640px] '>
                        <div className='mx-2 lg:flex justify-between xl:block'>
                            <div className='border-b lg:border-none xl:border-b'>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center lg:text-left'>Contact us</h1>
                                <p className='mt-4 mb-6  text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus.</p>
                                <div className='flex gap-5 mb-7 justify-center lg:justify-normal'>
                                    <div>
                                        <p className='flex items-center  text-gray-700'>
                                            <MdEmail className='text-xl mr-2' />
                                            Send us an email
                                        </p>
                                        <p className='ml-7 font-semibold'>nafiz@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdPhone className='text-xl mr-2' />
                                            Phone number
                                        </p>
                                        <p className='ml-7 font-semibold'>+880 1745968723</p>
                                    </div>
                                </div>
                            </div>
                            <div className='xl:mt-12'>
                                <h1 className='text-2xl md:text-4xl lg:text-5xl text-center lg:text-left'>Need help?</h1>
                                <p className='mt-4 mb-6  text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus.</p>
                                <div className='flex gap-5 justify-center lg:justify-normal'>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdEmail className='text-xl mr-2' />
                                            Sales executives
                                        </p>
                                        <p className='ml-7 font-semibold'>sales@casa.com</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center text-gray-700'>
                                            <MdPhone className='text-xl mr-2' />
                                            Help & support
                                        </p>
                                        <p className='ml-7 font-semibold'>support@casa.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-11 w-full rounded-3xl mx-2 mt-12 lg:mt-0 '>
                        <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="relative">
                                <label htmlFor="first-name" className='block mb-2.5 font-semibold'>
                                    First name
                                </label>
                                <div className="flex items-center">
                                    <FaUser className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="first-name"
                                        type="text"
                                        name="name"
                                        placeholder='First name'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="last-name" className='block mb-2.5 font-semibold'>
                                    Last name
                                </label>
                                <div className="flex items-center">
                                    <FaUser className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="last-name"
                                        type="text"
                                        name="name"
                                        placeholder='Last name'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className='block mb-2.5 font-semibold'>
                                    Email address
                                </label>
                                <div className="flex items-center">
                                    <MdEmail className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="email"
                                        type="text"
                                        name="name"
                                        placeholder='example@yourmail.com'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label htmlFor="phone" className='block mb-2.5 font-semibold'>
                                    Email address
                                </label>
                                <div className="flex items-center">
                                    <MdPhone className="absolute left-3 text-gray-400" style={{ fontSize: '20px' }} />
                                    <input
                                        id="phone"
                                        type="text"
                                        name="name"
                                        placeholder='(123) 4567890'
                                        className='bg-gray-50 pl-10 py-3 px-3 w-full focus:outline-none rounded-full'
                                    />
                                </div>
                            </div>
                            <div className="relative md:col-span-2">
                                <label htmlFor="options" className="block mb-2.5 font-semibold">
                                    Inquiry type
                                </label>
                                <select
                                    id="options"
                                    name="options"
                                    className="bg-gray-50 pl-3 py-3 w-full focus:outline-none rounded-full"
                                >
                                    <option value="" disabled>General inquiry</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div className="relative md:col-span-2">
                                <label htmlFor="comment" className="block mb-2.5 font-semibold text-gray-700">
                                    Your Message
                                </label>
                                <div className="relative flex items-start">
                                    <FaPen className="absolute top-3 left-3 text-gray-400" style={{ fontSize: '16px' }} />
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        placeholder='Write your message here...'
                                        className='bg-gray-50 pl-10 py-3 w-full h-32 resize-none focus:outline-none rounded-md'
                                    />
                                </div>
                            </div>
                            <button className='primary-btn flex items-center mt-6 w-[167px]'>
                                Send message
                                <FaArrowRight className='bg-white p-2 w-[28px] h-[28px] rounded-full text-black ml-2' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;